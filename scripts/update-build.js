#!/usr/bin/env node

import fs from "node:fs/promises";
import fsSync from "node:fs";
import http from "node:http";
import https from "node:https";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import zlib from "node:zlib";
import { injectBuildMetadata } from "./inject-metadata.js";

const PROJECT_ROOT = process.cwd();
const BUILD_DIR = path.resolve(PROJECT_ROOT, "build");
const TMP_ROOT = path.resolve(PROJECT_ROOT, "tmp");
const MAX_REDIRECTS = 5;

const USAGE = `Usage: npm run update-build -- "<azure-storage-sas-url>"

You can also provide the URL through BUILD_SAS_URL or SAS_URL.`;

main().catch((error) => {
  console.error(`update-build failed: ${error.message}`);
  process.exitCode = 1;
});

async function main() {
  const sasUrl = process.argv[2] || process.env.BUILD_SAS_URL || process.env.SAS_URL;

  if (!sasUrl) {
    throw new Error(USAGE);
  }

  const sourceUrl = parseSourceUrl(sasUrl);
  ensureInsideProject(BUILD_DIR, "build directory");
  ensureInsideProject(TMP_ROOT, "temporary directory");

  await fs.mkdir(TMP_ROOT, { recursive: true });
  const jobDir = await fs.mkdtemp(path.join(TMP_ROOT, "update-build-"));
  const archivePath = path.join(jobDir, "build.zip");
  const extractDir = path.join(jobDir, "extract");
  const backupDir = path.join(jobDir, "previous-build");

  try {
    console.log("Downloading build archive...");
    const downloadedBytes = await downloadFile(sourceUrl, archivePath);
    console.log(`Downloaded ${formatBytes(downloadedBytes)}.`);

    console.log("Extracting archive...");
    const extractedFiles = await extractZip(archivePath, extractDir);

    if (extractedFiles === 0) {
      throw new Error("Archive did not contain any files.");
    }

    console.log(`Extracted ${extractedFiles} files.`);
    await fs.rm(archivePath, { force: true });
    console.log("Deleted downloaded archive.");

    const { changed } = await injectBuildMetadata(extractDir);
    console.log(
      changed
        ? "Injected platform metadata and crawler policy."
        : "Platform metadata and crawler policy were already current.",
    );

    await replaceBuildDirectory(extractDir, backupDir);
    console.log(`Build updated at ${path.relative(PROJECT_ROOT, BUILD_DIR)}.`);
  } finally {
    await fs.rm(jobDir, { recursive: true, force: true });
  }
}

function parseSourceUrl(value) {
  let parsedUrl;

  try {
    parsedUrl = new URL(value);
  } catch {
    throw new Error("The provided SAS URL is not a valid URL.");
  }

  if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
    throw new Error("The SAS URL must use http or https.");
  }

  return parsedUrl;
}

async function downloadFile(sourceUrl, destinationPath, redirectCount = 0) {
  return new Promise((resolve, reject) => {
    const client = sourceUrl.protocol === "https:" ? https : http;
    const request = client.get(sourceUrl, (response) => {
      const statusCode = response.statusCode ?? 0;

      if (isRedirect(statusCode) && response.headers.location) {
        response.resume();

        if (redirectCount >= MAX_REDIRECTS) {
          reject(new Error("Download redirected too many times."));
          return;
        }

        const redirectedUrl = new URL(response.headers.location, sourceUrl);
        downloadFile(redirectedUrl, destinationPath, redirectCount + 1)
          .then(resolve)
          .catch(reject);
        return;
      }

      if (statusCode < 200 || statusCode >= 300) {
        response.resume();
        reject(new Error(`Download failed with HTTP ${statusCode}.`));
        return;
      }

      let downloadedBytes = 0;
      response.on("data", (chunk) => {
        downloadedBytes += chunk.length;
      });

      pipeline(response, fsSync.createWriteStream(destinationPath))
        .then(() => resolve(downloadedBytes))
        .catch(reject);
    });

    request.setTimeout(60_000, () => {
      request.destroy(new Error("Download timed out."));
    });

    request.on("error", reject);
  });
}

function isRedirect(statusCode) {
  return [301, 302, 303, 307, 308].includes(statusCode);
}

async function extractZip(archivePath, outputDir) {
  const archive = await fs.readFile(archivePath);
  const endOfCentralDirectory = findEndOfCentralDirectory(archive);
  const totalEntries = archive.readUInt16LE(endOfCentralDirectory + 10);
  const centralDirectorySize = archive.readUInt32LE(endOfCentralDirectory + 12);
  const centralDirectoryOffset = archive.readUInt32LE(endOfCentralDirectory + 16);

  if (
    totalEntries === 0xffff ||
    centralDirectorySize === 0xffffffff ||
    centralDirectoryOffset === 0xffffffff
  ) {
    throw new Error("Zip64 archives are not supported.");
  }

  if (centralDirectoryOffset + centralDirectorySize > archive.length) {
    throw new Error("Zip central directory points outside the archive.");
  }

  await fs.mkdir(outputDir, { recursive: true });

  let pointer = centralDirectoryOffset;
  let extractedFiles = 0;

  for (let index = 0; index < totalEntries; index += 1) {
    const entry = readCentralDirectoryEntry(archive, pointer);
    pointer = entry.nextPointer;

    if (await extractZipEntry(archive, outputDir, entry)) {
      extractedFiles += 1;
    }
  }

  return extractedFiles;
}

function findEndOfCentralDirectory(archive) {
  const signature = 0x06054b50;
  const minimumSize = 22;
  const maximumCommentLength = 0xffff;
  const start = Math.max(0, archive.length - minimumSize - maximumCommentLength);

  for (let pointer = archive.length - minimumSize; pointer >= start; pointer -= 1) {
    if (archive.readUInt32LE(pointer) === signature) {
      return pointer;
    }
  }

  throw new Error("File is not a valid zip archive.");
}

function readCentralDirectoryEntry(archive, pointer) {
  const signature = 0x02014b50;

  if (archive.readUInt32LE(pointer) !== signature) {
    throw new Error("Zip central directory is corrupt.");
  }

  const flags = archive.readUInt16LE(pointer + 8);
  const compressionMethod = archive.readUInt16LE(pointer + 10);
  const compressedSize = archive.readUInt32LE(pointer + 20);
  const uncompressedSize = archive.readUInt32LE(pointer + 24);
  const fileNameLength = archive.readUInt16LE(pointer + 28);
  const extraLength = archive.readUInt16LE(pointer + 30);
  const commentLength = archive.readUInt16LE(pointer + 32);
  const externalAttributes = archive.readUInt32LE(pointer + 38);
  const localHeaderOffset = archive.readUInt32LE(pointer + 42);
  const nameStart = pointer + 46;
  const nameEnd = nameStart + fileNameLength;
  const nextPointer = nameEnd + extraLength + commentLength;

  if (nextPointer > archive.length) {
    throw new Error("Zip central directory entry points outside the archive.");
  }

  const encoding = flags & 0x0800 ? "utf8" : "latin1";
  const name = archive.subarray(nameStart, nameEnd).toString(encoding);

  return {
    name,
    flags,
    compressionMethod,
    compressedSize,
    uncompressedSize,
    externalAttributes,
    localHeaderOffset,
    nextPointer,
  };
}

async function extractZipEntry(archive, outputDir, entry) {
  const name = normalizeZipEntryName(entry.name);

  if (!name) {
    return false;
  }

  const unixMode = entry.externalAttributes >>> 16;
  const fileType = unixMode & 0o170000;
  const isDirectory = name.endsWith("/") || fileType === 0o040000 || Boolean(entry.externalAttributes & 0x10);
  const isSymlink = fileType === 0o120000;

  if (isSymlink) {
    throw new Error(`Refusing to extract symlink entry: ${name}`);
  }

  const destinationPath = safeOutputPath(outputDir, name);

  if (isDirectory) {
    await fs.mkdir(destinationPath, { recursive: true });
    return false;
  }

  if (entry.flags & 0x0001) {
    throw new Error(`Encrypted zip entries are not supported: ${name}`);
  }

  if (entry.compressedSize === 0xffffffff || entry.uncompressedSize === 0xffffffff) {
    throw new Error(`Zip64 entry is not supported: ${name}`);
  }

  if (entry.compressionMethod !== 0 && entry.compressionMethod !== 8) {
    throw new Error(`Unsupported compression method ${entry.compressionMethod} for ${name}`);
  }

  if (entry.localHeaderOffset + 30 > archive.length) {
    throw new Error(`Local zip header points outside the archive for ${name}`);
  }

  if (archive.readUInt32LE(entry.localHeaderOffset) !== 0x04034b50) {
    throw new Error(`Local zip header is corrupt for ${name}`);
  }

  const localFileNameLength = archive.readUInt16LE(entry.localHeaderOffset + 26);
  const localExtraLength = archive.readUInt16LE(entry.localHeaderOffset + 28);
  const dataStart = entry.localHeaderOffset + 30 + localFileNameLength + localExtraLength;
  const dataEnd = dataStart + entry.compressedSize;

  if (dataEnd > archive.length) {
    throw new Error(`Zip entry data points outside the archive: ${name}`);
  }

  const compressedData = archive.subarray(dataStart, dataEnd);
  const fileContents =
    entry.compressionMethod === 0 ? Buffer.from(compressedData) : zlib.inflateRawSync(compressedData);

  if (fileContents.length !== entry.uncompressedSize) {
    throw new Error(`Uncompressed size mismatch for ${name}`);
  }

  await fs.mkdir(path.dirname(destinationPath), { recursive: true });
  await fs.writeFile(destinationPath, fileContents);

  const mode = unixMode & 0o777;
  if (mode) {
    await fs.chmod(destinationPath, mode).catch(() => {});
  }

  return true;
}

function normalizeZipEntryName(name) {
  const normalized = name.replace(/\\/g, "/");

  if (!normalized || normalized === "/") {
    return "";
  }

  if (normalized.includes("\0")) {
    throw new Error("Zip entry contains a null byte.");
  }

  if (normalized.startsWith("/") || /^[A-Za-z]:/.test(normalized)) {
    throw new Error(`Refusing to extract absolute zip path: ${normalized}`);
  }

  const rawParts = normalized.split("/");
  if (rawParts.some((part) => part === "..")) {
    throw new Error(`Refusing to extract zip path outside build: ${normalized}`);
  }

  const parts = rawParts.filter((part) => part && part !== ".");

  if (parts.length === 0) {
    return "";
  }

  return `${parts.join("/")}${normalized.endsWith("/") ? "/" : ""}`;
}

function safeOutputPath(outputDir, entryName) {
  const destinationPath = path.resolve(outputDir, ...entryName.split("/").filter(Boolean));
  const relativePath = path.relative(outputDir, destinationPath);

  if (!relativePath || relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    throw new Error(`Refusing to extract unsafe zip path: ${entryName}`);
  }

  return destinationPath;
}

async function replaceBuildDirectory(extractDir, backupDir) {
  const hadBuildDirectory = await pathExists(BUILD_DIR);

  if (hadBuildDirectory) {
    await fs.rename(BUILD_DIR, backupDir);
  }

  try {
    await fs.rename(extractDir, BUILD_DIR);
  } catch (error) {
    if (hadBuildDirectory) {
      await fs.rename(backupDir, BUILD_DIR).catch(() => {});
    }

    throw error;
  }
}

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function ensureInsideProject(targetPath, label) {
  const relativePath = path.relative(PROJECT_ROOT, targetPath);

  if (!relativePath || relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    throw new Error(`Refusing to use ${label} outside the project.`);
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

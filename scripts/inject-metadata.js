#!/usr/bin/env node

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const START_MARKER = "<!-- chloeta-platform-metadata:start -->";
const END_MARKER = "<!-- chloeta-platform-metadata:end -->";
const NOSCRIPT_START_MARKER = "<!-- chloeta-platform-noscript:start -->";
const NOSCRIPT_END_MARKER = "<!-- chloeta-platform-noscript:end -->";
const ROBOTS_CONTENT = "User-agent: *\nAllow: /\n";
const SITE_URL = "https://lm.chloetadata.com/";
const TITLE = "Chloeta Wildfire Mitigation & Analytics Platform";
const DESCRIPTION =
  "Chloeta's business platform for wildfire mitigation and analytics delivers predictive risk intelligence, real-time monitoring, GIS insights, and decision support for utilities and critical infrastructure.";
const TITLE_HTML = escapeHtml(TITLE);
const DESCRIPTION_HTML = escapeHtml(DESCRIPTION);

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: TITLE,
  url: SITE_URL,
  description: DESCRIPTION,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Wildfire mitigation and analytics",
  browserRequirements: "Requires JavaScript",
  provider: {
    "@type": "Organization",
    name: "Chloeta",
    url: "https://www.chloeta.com/",
  },
};

const METADATA_BLOCK = `${START_MARKER}
<meta name="description" content="${DESCRIPTION_HTML}">
<meta name="application-name" content="${TITLE_HTML}">
<meta name="author" content="Chloeta">
<meta name="category" content="Business, Wildfire Mitigation, Wildfire Analytics">
<meta name="robots" content="noindex, follow">
<link rel="canonical" href="${SITE_URL}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Chloeta">
<meta property="og:title" content="${TITLE_HTML}">
<meta property="og:description" content="${DESCRIPTION_HTML}">
<meta property="og:url" content="${SITE_URL}">
<script type="application/ld+json">${JSON.stringify(STRUCTURED_DATA)}</script>
${END_MARKER}`;

const NOSCRIPT_BLOCK = `${NOSCRIPT_START_MARKER}
<noscript>
  <main>
    <h1>${TITLE_HTML}</h1>
    <p>
      Chloeta provides a business GIS platform for wildfire mitigation,
      predictive risk intelligence, real-time monitoring, GIS analysis,
      and decision support for utilities and critical infrastructure.
    </p>
    <p>
      JavaScript is required to use the interactive mapping application.
      Learn more at <a href="https://www.chloeta.com/">Chloeta.com</a>.
    </p>
  </main>
</noscript>
${NOSCRIPT_END_MARKER}`;

export async function injectBuildMetadata(buildDirectory = path.resolve(process.cwd(), "build")) {
  const indexPath = path.join(buildDirectory, "index.html");
  const robotsPath = path.join(buildDirectory, "robots.txt");
  let html;

  try {
    html = await fs.readFile(indexPath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      throw new Error(`Build index not found: ${indexPath}`);
    }

    throw error;
  }

  if (!html.includes("</head>")) {
    throw new Error(`Build index does not contain </head>: ${indexPath}`);
  }

  if (!/<body(?:\s[^>]*)?>/i.test(html)) {
    throw new Error(`Build index does not contain a body element: ${indexPath}`);
  }

  const titlePattern = /<title>[\s\S]*?<\/title>/i;
  if (!titlePattern.test(html)) {
    throw new Error(`Build index does not contain a title element: ${indexPath}`);
  }

  const managedBlockPattern = new RegExp(
    `${escapeRegExp(START_MARKER)}[\\s\\S]*?${escapeRegExp(END_MARKER)}\\s*`,
    "g",
  );
  const managedNoscriptPattern = new RegExp(
    `${escapeRegExp(NOSCRIPT_START_MARKER)}[\\s\\S]*?${escapeRegExp(NOSCRIPT_END_MARKER)}\\s*`,
    "g",
  );
  const twitterMetadataPattern = /<meta\s+name=["']twitter:[^>]*>\s*/gi;
  const managedBlocks = [...html.matchAll(managedBlockPattern)];
  const managedNoscriptBlocks = [...html.matchAll(managedNoscriptPattern)];
  const titleElement = `<title>${TITLE_HTML}</title>`;
  const htmlIsCurrent =
    managedBlocks.length === 1 &&
    managedBlocks[0][0].trim() === METADATA_BLOCK &&
    managedNoscriptBlocks.length === 1 &&
    managedNoscriptBlocks[0][0].trim() === NOSCRIPT_BLOCK &&
    html.includes(titleElement) &&
    !twitterMetadataPattern.test(html);
  const existingRobots = await readOptionalFile(robotsPath);
  const robotsIsCurrent = existingRobots === ROBOTS_CONTENT;

  if (htmlIsCurrent && robotsIsCurrent) {
    return { changed: false, htmlChanged: false, robotsChanged: false, indexPath, robotsPath };
  }

  const updatedHtml = html
    .replace(managedBlockPattern, "")
    .replace(managedNoscriptPattern, "")
    .replace(twitterMetadataPattern, "")
    .replace(titlePattern, titleElement)
    .replace("</head>", `${METADATA_BLOCK}\n</head>`)
    .replace(/<body(?:\s[^>]*)?>/i, (bodyTag) => `${bodyTag}\n${NOSCRIPT_BLOCK}\n`);

  const htmlChanged = updatedHtml !== html;
  if (htmlChanged) {
    await fs.writeFile(indexPath, updatedHtml, "utf8");
  }

  if (!robotsIsCurrent) {
    await fs.writeFile(robotsPath, ROBOTS_CONTENT, "utf8");
  }

  return {
    changed: htmlChanged || !robotsIsCurrent,
    htmlChanged,
    robotsChanged: !robotsIsCurrent,
    indexPath,
    robotsPath,
  };
}

async function readOptionalFile(filePath) {
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") {
      return null;
    }

    throw error;
  }
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

async function main() {
  const buildDirectory = process.argv[2]
    ? path.resolve(process.argv[2])
    : path.resolve(process.cwd(), "build");
  const { changed, indexPath, robotsPath } = await injectBuildMetadata(buildDirectory);

  if (changed) {
    console.log(`Injected platform metadata into ${path.relative(process.cwd(), indexPath)}.`);
    console.log(`Wrote crawler policy to ${path.relative(process.cwd(), robotsPath)}.`);
  } else {
    console.log(
      `Platform metadata and crawler policy are already current in ${path.relative(process.cwd(), buildDirectory)}.`,
    );
  }
}

const isDirectRun =
  process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1]);

if (isDirectRun) {
  main().catch((error) => {
    console.error(`inject-metadata failed: ${error.message}`);
    process.exitCode = 1;
  });
}

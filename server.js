import express from "express";
import path from "path";
import { injectBuildMetadata } from "./scripts/inject-metadata.js";

const app = express();
const BUILD_DIR = path.join(process.cwd(), "build");
const PORT = process.env.PORT || 3002;

app.disable("x-powered-by");
app.use(express.static(BUILD_DIR));

async function start() {
  console.log("Checking build metadata, no-JavaScript fallback, and crawler policy...");
  const { changed } = await injectBuildMetadata(BUILD_DIR);

  if (changed) {
    console.log("Injected missing or stale platform metadata into the build.");
  } else {
    console.log("Build metadata, no-JavaScript fallback, and crawler policy are current.");
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

start().catch((error) => {
  console.error(`Server failed to start: ${error.message}`);
  process.exitCode = 1;
});

import express from "express";
import path from "path";

const app = express();
const BUILD_DIR = path.join(process.cwd(), "build");
const PORT = process.env.PORT || 3002;

app.disable("x-powered-by");
app.use(express.static(BUILD_DIR));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

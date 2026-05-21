import crypto from "crypto";
import express from "express";
import session from "express-session";
import path from "path";
import { createUsersRouter } from "./users/users.routes.js";

const app = express();
const VIEWS_DIR = path.join(process.cwd(), "views");
const BUILD_DIR = path.join(process.cwd(), "build");
const AUTH_ASSETS_DIR = path.join(process.cwd(), "public", "auth");
const BUILD_ASSETS_DIR = path.join(BUILD_DIR, "cdn");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/auth-assets", express.static(AUTH_ASSETS_DIR));
app.use("/cdn", express.static(BUILD_ASSETS_DIR));

app.set("trust proxy", 1);

const SECRET = crypto.randomBytes(64).toString("hex");
const IS_PROD = process.env.IS_PROD === "true";
const PORT = process.env.PORT || 3002;

app.use(
  session({
    name: "sid",
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      httpOnly: true,
      secure: IS_PROD,
      sameSite: "lax",
      maxAge: 30 * 60 * 1000,
    },
  }),
);

const usersRouter = createUsersRouter();

app.get("/", (req, res) => {
  if (!req.session.authenticated) {
    return res.redirect("/login");
  }

  res.sendFile(path.join(BUILD_DIR, "index.html"));
});

app.get("/login", (req, res) => {
  if (req.session.authenticated) {
    return res.redirect("/");
  }

  res.sendFile(path.join(VIEWS_DIR, "login.html"));
});

app.get("/mfa/setup", (req, res) => {
  res.sendFile(path.join(VIEWS_DIR, "mfa-setup.html"));
});

app.get("/service-worker.js", (req, res) => {
  res.sendFile(path.join(BUILD_DIR, "service-worker.js"));
});

app.use("/users", usersRouter);
app.use("/", usersRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

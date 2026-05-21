import crypto from "crypto";
import express from "express";
import session from "express-session";
import { createUsersRouter } from "./users/users.routes.js";

const app = express();

app.use(express.json());

app.set("trust proxy", 1);

const SECRET = crypto.randomBytes(64).toString("hex");
const IS_PROD = process.env.IS_PROD === "true";

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
  })
);

const usersRouter = createUsersRouter();

app.use("/users", usersRouter);
app.use("/", usersRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

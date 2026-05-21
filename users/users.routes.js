import express from "express";
import bcrypt from "bcrypt";
import speakeasy from "speakeasy";
import QRCode from "qrcode";
import {
  findUser,
  readUsers,
  saveUsers,
  updateUser,
} from "./users.store.js";

function requireAuth(req, res, next) {
  if (!req.session.authenticated) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }

  next();
}

function startAuthenticatedSession(req, user, res) {
  req.session.regenerate((err) => {
    if (err) {
      return res.status(500).json({
        error: "Session error",
      });
    }

    req.session.username = user.username;
    req.session.authenticated = true;

    res.json({
      authenticated: true,
      message: "Login successful",
    });
  });
}

export function createUsersRouter() {
  const router = express.Router();

  router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        error: "Username and password are required",
      });
    }

    const users = readUsers();
    const exists = users.find((user) => user.username === username);

    if (exists) {
      return res.status(409).json({
        error: "User already exists",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    users.push({
      username,
      passwordHash,
      mfaEnabled: false,
      mfaSecret: null,
      forceMfaReset: false,
    });

    saveUsers(users);

    res.json({
      message: "User registered",
    });
  });

  router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = findUser(username);

    if (!user) {
      return res.status(401).json({
        error: "Invalid credentials",
      });
    }

    const validPassword = await bcrypt.compare(password, user.passwordHash);

    if (!validPassword) {
      return res.status(401).json({
        error: "Invalid credentials",
      });
    }

    req.session.username = username;

    if (user.forceMfaReset) {
      req.session.forceMfaReset = true;

      return res.json({
        forceMfaReset: true,
        message: "MFA reset required. Register a new authenticator.",
      });
    }

    if (user.mfaEnabled) {
      req.session.pendingMfa = true;

      return res.json({
        mfaRequired: true,
        message: "Enter MFA code",
      });
    }

    startAuthenticatedSession(req, user, res);
  });

  router.post("/mfa/setup", async (req, res) => {
    const user = findUser(req.session.username);

    if (!user) {
      return res.status(401).json({
        error: "Login required",
      });
    }

    if (user.mfaEnabled && !req.session.forceMfaReset) {
      return res.status(403).json({
        error: "MFA already enabled",
      });
    }

    const secret = speakeasy.generateSecret({
      name: `ExpressMFA (${user.username})`,
    });

    req.session.tempSecret = secret.base32;

    const qrCode = await QRCode.toDataURL(secret.otpauth_url);

    res.json({
      qrCode,
      secret: secret.base32,
    });
  });

  router.post("/mfa/verify-setup", (req, res) => {
    const { token } = req.body;
    const user = findUser(req.session.username);

    if (!user || !req.session.tempSecret) {
      return res.status(400).json({
        error: "MFA setup not started",
      });
    }

    const verified = speakeasy.totp.verify({
      secret: req.session.tempSecret,
      encoding: "base32",
      token,
      window: 1,
    });

    if (!verified) {
      return res.status(401).json({
        error: "Invalid OTP",
      });
    }

    user.mfaEnabled = true;
    user.mfaSecret = req.session.tempSecret;
    user.forceMfaReset = false;

    updateUser(user);

    req.session.regenerate((err) => {
      if (err) {
        return res.status(500).json({
          error: "Session error",
        });
      }

      req.session.username = user.username;
      req.session.authenticated = true;

      res.json({
        authenticated: true,
        message: "MFA registered successfully",
      });
    });
  });

  router.post("/mfa/login", (req, res) => {
    const { token } = req.body;
    const user = findUser(req.session.username);

    if (!user || !req.session.pendingMfa) {
      return res.status(400).json({
        error: "MFA not pending",
      });
    }

    const verified = speakeasy.totp.verify({
      secret: user.mfaSecret,
      encoding: "base32",
      token,
      window: 1,
    });

    if (!verified) {
      return res.status(401).json({
        error: "Invalid OTP",
      });
    }

    startAuthenticatedSession(req, user, res);
  });

  router.get("/dashboard", requireAuth, (req, res) => {
    res.json({
      message: `Welcome ${req.session.username}`,
    });
  });

  router.post("/logout", (req, res) => {
    req.session.destroy(() => {
      res.clearCookie("sid");

      res.json({
        message: "Logged out",
      });
    });
  });

  return router;
}

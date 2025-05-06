// src/routes/apis/user.route.js
import express from "express";
import { authenticateToken, isAdmin } from "../../middlewares/user.validate.js";
import {
  register,
  login,
  refreshToken,
  logout,
} from "../../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/token", refreshToken);
router.post("/logout", logout);

router.get("/profile", authenticateToken, (req, res) => {
  res.json({
    message: `Welcome, user ${req.user.userId}`,
    role: req.user.role,
  });
});

router.get("/admin", authenticateToken, isAdmin, (req, res) => {
  res.json({ message: "Welcome, admin!" });
});

export default router; // Đảm bảo có export default router

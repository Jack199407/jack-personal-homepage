// server/routes/auth.js
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const db = require("../db");
require("dotenv").config();

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";
const SECRET = process.env.JWT_SECRET;

router.post("/request-signup", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  const token = jwt.sign({ email }, SECRET, { expiresIn: "15m" });
  const link = `${CLIENT_URL}?token=${token}`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"No Reply" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Confirm your registration",
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <p>
          非常感谢您注册成为我项目中的用户之一。实际上我还没有想到注册成为我的用户之后可以为您提供什么功能，
          但是！既来之，我愿送上我最美好的祝福。或许你和我一样，正在找工作的道路上努力前行，或许生活还有其他不顺心的地方。
          请不要放弃，坚持下去，愿笑容陪伴你每一天！
        </p>
        <p>
          Thank you so much for signing up to be a user of my project.
          To be honest, I haven't figured out what exclusive features to offer you yet.
          But since you're here, I sincerely wish you all the best.
          Maybe you’re also job hunting like me, or going through something tough—
          whatever it is, don’t give up. Keep going, and may your days be filled with smiles!
        </p>
        <div style="margin-top: 30px; text-align: center;">
          <a href="${link}" 
            style="display: inline-block; background-color: #007BFF; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            Keep Going!
          </a>
        </div>
      </div>
    `,
    });
    res.json({ message: "Email sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send email" });
  }
});

router.post("/confirm", async (req, res) => {
  const { token } = req.body;
  try {
    const { email } = jwt.verify(token, SECRET);
    await db.query(
      "INSERT IGNORE INTO users (email, created_at) VALUES (?, NOW())",
      [email]
    );
    res.json({ message: "User registered" });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid or expired token" });
  }
});

module.exports = router;

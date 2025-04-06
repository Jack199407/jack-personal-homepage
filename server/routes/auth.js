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
      html: `<p>Click the link to complete the registration: <a href="${link}">${link}</a></p>`,
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

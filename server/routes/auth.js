const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { sendMail } = require("../utils/mailer");
const db = require("../db");
require("dotenv").config();

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";
const SECRET = process.env.JWT_SECRET;

router.post("/request-signup", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  const token = jwt.sign({ email }, SECRET, { expiresIn: "15m" });
  const link = `${CLIENT_URL}?token=${token}`;

  try {
    await sendMail({
      to: email,
      subject: "Welcome! Just one click away",
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color:#007BFF;">Welcome to Jack's World!</h2>
        <p>
          Thank you so much for signing up!<br />
          We're excited to have you here. Before you get started, please confirm your email address.
        </p>
        <p>
          To be honest, I haven’t figured out what exclusive features to offer yet.<br />
          But since you're here, I sincerely wish you all the best.
          Whether you're job hunting like me, or going through something tough—don’t give up.
          Keep going, and may your days be filled with smiles!
        </p>
        <div style="margin-top: 30px; text-align: center;">
          <a href="${link}" 
            style="display: inline-block; background-color: #007BFF; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            Confirm Email
          </a>
        </div>
        <p style="font-size: 12px; color: #888; margin-top: 20px;">
          If you didn't request this, feel free to ignore this email.
        </p>
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

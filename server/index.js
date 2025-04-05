// server/index.js

process.on("uncaughtException", (err) => {
  console.error("\u274c Uncaught Exception:", err.stack || err);
});

process.on("unhandledRejection", (reason) => {
  console.error("\u274c Unhandled Promise Rejection:", reason);
});

require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5050; // fallback to 5050 if not set

const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";

app.use(
  cors({
    origin: corsOrigin,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json()); // parse JSON body

// health check route
app.get("/", (req, res) => {
  const message = "\u2705 Server is alive: " + Math.random().toFixed(5);
  res.send(message);
});

// send email route
app.post("/api/send-email", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `\"Jack's Site\" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Jack's Resume",
      text: "Here is my resume.",
      attachments: [
        {
          filename: "Resume-Ke.pdf",
          path: path.join(__dirname, "Resume-Ke.pdf"),
        },
      ],
    });

    res.json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("\u274c Email send failed:", err);
    res.status(500).json({ message: "Failed to send email." });
  }
});

const server = app.listen(PORT, () => {
  console.log(`\u2705 Express server is running at http://localhost:${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`\u274c Port ${PORT} is already in use!`);
  } else {
    console.error("\u274c Server error:", err);
  }
  process.exit(1);
});

process.on("SIGINT", () => {
  console.log("\n\u{1F6D1} Server manually stopped (Ctrl+C)");
  process.exit();
});

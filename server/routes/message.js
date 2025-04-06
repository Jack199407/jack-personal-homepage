const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/save", async (req, res) => {
  const { email, content } = req.body;
  if (!email || !content) {
    return res.status(400).json({ message: "Email and content are required" });
  }

  try {
    const moment = require("moment-timezone");

    const utcTime = moment().utc().format("YYYY-MM-DD HH:mm:ss");

    await db.query(
      "INSERT INTO message (email, content, create_at) VALUES (?, ?, ?)",
      [email, content, utcTime]
    );
    res.json({ message: "Message saved" });
  } catch (err) {
    console.error("Failed to save message:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/latest", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM message ORDER BY create_at DESC LIMIT 10"
    );
    res.json(rows);
  } catch (err) {
    console.error("Failed to load messages:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;

// server/routes/email.js
const express = require("express");
const router = express.Router();
const path = require("path");
const { sendMail } = require("../utils/mailer");

router.post("/send-email", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  const result = await sendMail({
    to: email,
    subject: "Jack's Resume",
    text: "Here is my resume.",
    attachments: [
      {
        filename: "Resume-Ke.pdf",
        path: path.join(__dirname, "../Resume-Ke.pdf"),
      },
    ],
  });

  if (result.success) {
    res.json({ message: "Email sent successfully!" });
  } else {
    res.status(500).json({ message: "Failed to send email." });
  }
});

module.exports = router;

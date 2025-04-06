const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
async function sendMail({ to, subject, text, html, attachments }) {
  try {
    const info = await transporter.sendMail({
      from: `"Jack's Site" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
      html,
      attachments,
    });
    return { success: true, info };
  } catch (err) {
    console.error("sendMail failed:", err);
    return { success: false, error: err };
  }
}

module.exports = { sendMail };

const nodemailer = require("nodemailer");
require("dotenv").config();
console.log("MAIL CONFIG:", {
  host: process.env.EMAIL_HOST,
  user: process.env.EMAIL_USER,
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
});
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: true,
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

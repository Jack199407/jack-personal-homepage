require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user");
const messageRoutes = require("./routes/message");

const app = express();
const PORT = process.env.PORT || 5050;
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";

// Middlewares
app.use(cors({ origin: corsOrigin }));
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const emailRoutes = require("./routes/email");

app.use("/api/auth", authRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/user", userRoutes);
app.use("/api/message", messageRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("✅ Server is alive");
});

// Start
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

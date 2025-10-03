require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import your route files
const projectsRouter = require("./routes/projects");
const contactRouter = require("./routes/contact");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (updated, no deprecated options)
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.use("/api/projects", projectsRouter);
app.use("/api/contact", contactRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));

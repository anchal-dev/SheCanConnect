import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);
app.options("*", cors());
app.use(express.json());

// Routes
app.use("/api/contact", contactRoutes);

// Test route
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend Working" });
});

// Start server first, then attempt DB connection
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

// MongoDB Connection (non-fatal — server runs even without DB)
const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri || uri.includes("<username>")) {
      console.warn("⚠️  MongoDB URI not configured. Update MONGO_URI in server/.env");
      console.warn("   Contact form will return errors until DB is connected.");
      return;
    }
    const conn = await mongoose.connect(uri);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Error: ${error.message}`);
    console.warn("   Server will continue running without database.");
  }
};

connectDB();

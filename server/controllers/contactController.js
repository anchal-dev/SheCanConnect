import mongoose from "mongoose";
import Contact from "../models/Contact.js";

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
export const submitContact = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        error: "Database is not connected. Please verify MONGO_URI is set in Render environment variables."
      });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const contact = await Contact.create({ name, email, subject, message });

    res.status(201).json({
      success: true,
      message: "Thank you! Your message has been received.",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    Get all contact messages
// @route   GET /api/contact
// @access  Public (protect in production)
export const getContacts = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(503).json({
        error: "Database is not connected. Please verify MONGO_URI is set in Render environment variables."
      });
    }

    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

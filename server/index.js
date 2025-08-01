const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
require("dotenv").config();

const Submission = require("./models/submission");

const app = express();
app.use(cors());
app.use(express.json());

// ---------------- Cloudinary Setup ----------------
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Cloudinary multer storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "elevate_uploads", // optional folder name
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

// ---------------- MongoDB Setup ----------------
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ---------------- Routes ----------------

// Submit form with image
app.post("/submit", upload.single("image"), async (req, res) => {
  try {
    const { name, email, phone, age, gender, church, invitedBy, institution, selectedOptions } = req.body;

    const newSubmission = new Submission({
      name,
      email,
      phone,
      age,
      gender,
      church,
      invitedBy,
      institution,
      selectedOptions: JSON.parse(selectedOptions), // if sent as string from frontend
      imageUrl: req.file?.path || "", // Cloudinary image URL
    });

    await newSubmission.save();
    res.status(201).json({ message: "Data submitted successfully" });
  } catch (error) {
    console.error("Submission error:", error);
    res.status(500).json({ message: "Submission failed", error });
  }
});


// Get all submissions
app.get("/submissions", async (req, res) => {
  try {
    const data = await Submission.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error });
  }
});

// ---------------- Start Server ----------------
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

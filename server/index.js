// index.js
const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

const Submission = require("./models/submission");

const app = express();
// app.use(cors({ origin: "https://nexus-iyfc.netlify.app/", methods: ["GET", "POST"] }));
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));
// app.use(cors());
// app.use(cors());

// ✅ Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Setup multer with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "elevate_uploads",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const upload = multer({ storage });

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ Submit Route
app.post("/submit", upload.single("image"), async (req, res) => {
  try {
    console.log("📦 Body:", req.body);
    console.log("🖼️ File:", req.file);

    const {
      name,
      email,
      phone,
      age,
      gender,
      church,
      invitedBy,
      institution,
      selectedOptions
    } = req.body;

    // 🔐 Safe parsing
    let parsedOptions = [];
    try {
      parsedOptions = typeof selectedOptions === "string" 
        ? JSON.parse(selectedOptions) 
        : Array.isArray(selectedOptions) 
          ? selectedOptions 
          : [];
    } catch (e) {
      console.error("❌ selectedOptions parse failed:", e);
      return res.status(400).json({ message: "Invalid selectedOptions format" });
    }

    const newSubmission = new Submission({
      name,
      email,
      phone,
      age,
      gender,
      church,
      invitedBy,
      institution,
      selectedOptions: parsedOptions,
      imageUrl: req.file?.path || "",
    });

    await newSubmission.save();
    return res.status(201).json({ message: "Form submitted successfully" });

  } catch (error) {
    console.error("🔥 Server error:", error);
    return res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
});


// Add inside your /submit route AFTER successful save:
await axios.post("https://script.google.com/macros/s/AKfycbxAXyMrRnRE7D4WixePAaCL-mlpv2m8niKdgoWj8oPAnziMICDsoDs_DUw1J5MZQspQ/exec", {
  name,
  email,
  phone,
  age,
  gender,
  church,
  invitedBy,
  institution,
  selectedOptions: JSON.parse(selectedOptions),
  imageUrl: req.file?.path || "",
});


// ✅ Get all submissions
app.get("/submissions", async (req, res) => {
  try {
    const data = await Submission.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving data", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

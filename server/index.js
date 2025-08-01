// index.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

const Submission = require("./models/submission");

const app = express();
app.use(cors());

// ❌ DO NOT use express.json() for FormData file uploads
// app.use(express.json()); // Remove this line when using multer with file uploads

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
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// ✅ Submit Route
app.post("/submit", upload.single("image"), async (req, res) => {
  try {
    console.log("Body Data:", req.body);
    console.log("Uploaded File:", req.file);

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

    const parsedOptions = JSON.parse(selectedOptions || "[]");

    const newSubmission = new Submission({
      name,
      email,
      phone,
      age: parseInt(age), // convert to number
      gender,
      church,
      invitedBy,
      institution,
      selectedOptions: parsedOptions,
      imageUrl: req.file?.path || ""
    });

    await newSubmission.save();
    res.status(201).json({ message: "Form submitted successfully" });

  } catch (error) {
    console.error("Submission error:", error);
    res.status(500).json({ message: "Error while submitting", error });
  }
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

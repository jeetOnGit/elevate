const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const cors = require("cors");
const Brevo = require("@getbrevo/brevo");
require("dotenv").config();

const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

const Submission = require("./models/submission");

const app = express();
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));

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

const brevoClient = new Brevo.TransactionalEmailsApi();
brevoClient.setApiKey(
  Brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.BREVO_API_KEY
);

const upload = multer({ storage });

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ Submit Route
app.post("/submit", upload.single("image"), async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      age,
      gender,
      church,
      invitedBy,
      institution,
      selectedOptions,
    } = req.body;

    let parsedOptions = [];
    try {
      parsedOptions =
        typeof selectedOptions === "string"
          ? JSON.parse(selectedOptions)
          : Array.isArray(selectedOptions)
          ? selectedOptions
          : [];
    } catch (e) {
      console.error("❌ selectedOptions parse failed:", e);
      return res
        .status(400)
        .json({ message: "Invalid selectedOptions format" });
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

    // ✅ Send to Google Sheet
    await axios.post(
      "https://script.google.com/macros/s/AKfycbyMXsQ-1b0aUlzMOPdJkl90KWCpRw-keiMPavel7U8KuqNFRvn1ftI55liz5DI-bUKE/exec",
      {
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
      }
    );

    const emailData = new Brevo.SendSmtpEmail();
    emailData.subject = "✅ Your Elevate 2.0 Registration Confirmation";
    emailData.htmlContent = `
      <h2>Hello ${name},</h2>
      <p>Thank you for registering for <strong>Elevate 2.0 Inter Church Talent Contest 🎯</strong></p>
      <p>📅 <strong>Date:</strong> 6th October 2025</p>
      <p>🕗 <strong>Time:</strong> 8 AM</p>
      <p>📍 <strong>Venue:</strong> Circular Road Baptist Chapel</p>
      <p><a href="https://maps.app.goo.gl/URvjwCc4JSXhNYed9" target="_blank">View Location</a></p>
      <br/>
      <p>Here’s what you need to remember:</p>
      <ol>
        <li className="">
          <strong>Join Our WhatsApp Channel:</strong> Get all event updates and announcements. <button className='py-2 px-3 bg-green-600 rounded text-white font-bold'><a className='' href='https://whatsapp.com/channel/0029Vb5xDqI6RGJ9abuCWY2p' target='_blank'>Join Now</a></button>
        </li>
        <li className="">
        <strong>Drama Competition :</strong> Each team must have minimum 5 members. Ewill be given 8-10 minutes to perform a drama.
        </li>
        <li className="">
        <strong>Dance Competition :</strong>  Each team must have minimum 4 members. Ewill be given 4-5 minutes to perform a dance.
        </li>
        <li className="">
        <strong>Singing Competition</strong>  Each team must have minimum 5 members and minstruments. Each team will be given 5 minutes to perform a song.
        </li>
        <li className="">
          <strong>Solo Reel Making :</strong> Bring your phone and charger with some crazEach participant will get an ample amount of time to complete their video maediting from morning to afternoon, and in between they can take part in theicompetition.
        </li>
        <li className="">
          <strong>Solo Sketching :</strong> Bring your own art materials (brushes, coloEach participant will get an ample amount of time to complete their sketch offrom morning to afternoon, and in between they can take part in their second competition.
        </li>
        <li className="">
        <strong>Solo Extempore :</strong> Each participant will draw a chit from a box covarious topics and deliver a 3-minute message or sermon on the spot.
        </li>
        <li className="">
        <strong>Double TT :</strong> Participants will be in a pair to face other teamssemi final and finals will be in singles. The Game will be in 11 points.
        </li>
        <li className="">
        <strong>Solo Carrom :</strong> Each participant will face each other in simple matches until we get a winner.
        </li>

      </ol>
      <p>If you have any questions, feel free to reach out to us at +91 8910241042</p>
      <p>See you there!<br/>Team Elevate 2.0</p>
    `;
    emailData.sender = { name: "Elevate Team", email: "dasjeet1009@gmail.com" };
    emailData.to = [{ email, name }];

    await brevoClient.sendTransacEmail(emailData);

    return res.status(201).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("🔥 Server error:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
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

// models/Submission.js
const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: String,
  phone: String,
  gender: String,
  church: String,
  inviteby: String,
  institution: String,
  options: [String], // checkbox selections
}, {
  timestamps: true,
});

module.exports = mongoose.model("Submission", SubmissionSchema);

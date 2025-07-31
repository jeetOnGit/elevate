// models/Submission.js
const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  phone: String,
  gender: String,
  church: String,
  organization: String,
  invitedBy: String,
  institution: String,
  selectedOptions: [{ type: String }] 
}, {
  timestamps: true,
});

module.exports = mongoose.model("Submission", SubmissionSchema);

const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  phone: String,
  gender: String,
  church: String,
  invitedBy: String,
  institution: String,
  selectedOptions: [{ type: String }],
  imageUrl: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("Submission", SubmissionSchema);

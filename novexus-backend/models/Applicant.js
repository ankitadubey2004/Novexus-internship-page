const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  linkedin: String,
  github: String,
  resumeURL: String,
}, { timestamps: true });

module.exports = mongoose.model('Applicant', applicantSchema);

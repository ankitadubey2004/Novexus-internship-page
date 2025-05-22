const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const Applicant = require('./models/Applicant');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.post('/api/apply', async (req, res) => {
  try {
    let { name, email, phone, githubOrLinkedIn, resumeUrl } = req.body;

    if (!email || !phone) {
      return res.status(400).json({ message: 'Email and phone are required.' });
    }

    // Normalize inputs
    email = email.trim().toLowerCase();
    phone = phone.trim();
    name = name ? name.trim() : '';
    githubOrLinkedIn = githubOrLinkedIn ? githubOrLinkedIn.trim() : '';
    resumeUrl = resumeUrl ? resumeUrl.trim() : '';

    console.log('Received application:', { name, email, phone, githubOrLinkedIn, resumeUrl });

    // Check duplicate by email + phone
    const existingApplicant = await Applicant.findOne({ email, phone });

    if (existingApplicant) {
      console.log('Duplicate found:', existingApplicant);
      return res.status(409).json({
        message: 'Duplicate application detected. You have already submitted this information.',
      });
    }

    // Save new applicant (mapping githubOrLinkedIn to github field)
    const newApplicant = new Applicant({
      name,
      email,
      phone,
      github: githubOrLinkedIn,
      resumeURL: resumeUrl,
    });

    await newApplicant.save();

    console.log('Application saved successfully');
    res.status(201).json({ message: 'Application submitted successfully' });

  } catch (error) {
    console.error('Error in /api/apply:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/applicants', async (req, res) => {
  try {
    const applicants = await Applicant.find().sort({ createdAt: -1 });
    res.json(applicants);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch applicants' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

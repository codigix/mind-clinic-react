const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'dist')));

// Multer configuration for file uploads
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only PDF, DOC, DOCX files
    if (file.mimetype === 'application/pdf' || 
        file.mimetype === 'application/msword' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
    }
  }
});

// Nodemailer transporter configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Email transporter error:', error);
  } else {
    console.log('Email transporter is ready');
  }
});

// Career application endpoint
app.post('/api/careers/apply', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, coverLetter } = req.body;
    
    // Validate required fields
    if (!name || !email || !coverLetter || !req.file) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }
    
    // Create email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'help@insightmind.in',
      subject: `Job Application from ${name}`,
      text: `
Dear Hiring Team,

I am interested in joining your team. Please find my resume attached.

Application Details:
Name: ${name}
Email: ${email}

Cover Letter:
${coverLetter}

Best regards,
${name}
      `,
      attachments: [
        {
          filename: req.file.originalname,
          content: req.file.buffer
        }
      ]
    };
    
    // Send email
    await transporter.sendMail(mailOptions);
    
    // Send success response
    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Error submitting application:', error);
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

// Serve React app for any non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
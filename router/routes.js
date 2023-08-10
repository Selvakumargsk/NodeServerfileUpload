const express = require('express');
const router = express.Router();
const multer = require('multer'); // Import multer for file uploads
const path = require('path');
const Candidate = require('../models/registrationModel');
const rootDir = require('../utilsfunc/path');

const profilePicturesDir = path.join(rootDir , 'uploads' , 'profilePic');
const resumesDir = path.join(rootDir , 'uploads' , 'resume');

// Configure multer to handle file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === 'profilePicture') {          // Specify where to store the uploaded files
      cb(null, profilePicturesDir);
    } else if (file.fieldname === 'resume') {
      cb(null, resumesDir);
    } else {
      cb(new Error('Invalid field name'));
    }
  }, 
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const fileExtension = path.extname(file.originalname);
    cb(null, uniqueSuffix + fileExtension);
  },
});
const upload = multer({ storage });


router.post('/candidateRegister', upload.fields([
  { name: 'profilePicture', maxCount: 1 },
  { name: 'resume', maxCount: 1 }
]), async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const { profilePicture, resume } = req.files;
    
    const newCandidate = await Candidate.create({
      firstName,
      lastName,
      email,
      profilePicture: profilePicture[0].filename,
      resume: resume[0].filename,
    });

    res.status(201).json({ message: 'Candidate registered successfully', candidate: newCandidate });
  } catch (error) {
    console.error('Error while registering candidate:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/' , (req , res)=>{
    res.send('Hello all')
});

// router/routes.js

router.get('/candidates', async (req, res) => {
    try {
      const candidates = await Candidate.findAll();
      res.json(candidates);
    } catch (error) {
      console.error('Error fetching candidates:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = router;

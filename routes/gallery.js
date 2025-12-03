// routes/gallery.js
const express = require('express');
const router = express.Router();
const { connectDB } = require('../config/db');

// Gallery page
router.get('/', async (req, res) => {
  try {
    const db = await connectDB();
    const [images] = await db.execute('SELECT id, title, image, created_at FROM gallery ORDER BY created_at DESC');
    res.render('gallery', { images });
  } catch (err) {
    console.error('Gallery Route Error:', err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

// routes/news.js
const express = require('express');
const router = express.Router();
const { getAllNews, getNewsById } = require('../controllers/newsController');

// All news
router.get('/', getAllNews);

// Single news view
router.get('/:id', getNewsById);

module.exports = router;

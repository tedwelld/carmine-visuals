// routes/index.js
const express = require('express');
const router = express.Router();
const { getHome } = require('../controllers/homeController');

// Home page
router.get('/', getHome);

module.exports = router;

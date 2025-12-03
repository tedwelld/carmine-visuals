// routes/admin.js
const express = require('express');
const router = express.Router();
const { login, dashboard, updateSettings } = require('../controllers/adminController');
const { ensureAdmin } = require('../utils/auth'); // middleware to protect admin routes

// Admin login page
router.get('/login', (req, res) => res.render('admin/login'));
router.post('/login', login);

// Admin dashboard (protected)
router.get('/dashboard', ensureAdmin, dashboard);

// Admin settings (protected)
router.get('/settings', ensureAdmin, (req, res) => res.render('admin/settings'));
router.post('/settings', ensureAdmin, updateSettings);

module.exports = router;

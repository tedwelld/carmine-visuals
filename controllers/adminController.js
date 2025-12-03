// controllers/adminController.js
const bcrypt = require('bcrypt');
const { connectDB } = require('../config/db');

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const db = await connectDB();
    const [user] = await db.execute(
      'SELECT id, username, password, role FROM users WHERE username = ?',
      [username]
    );

    if (user.length === 0) {
      return res.render('admin/login', { error: 'Invalid username or password' });
    }

    const validPassword = await bcrypt.compare(password, user[0].password);
    if (!validPassword) {
      return res.render('admin/login', { error: 'Invalid username or password' });
    }

    req.session.user = { id: user[0].id, username: user[0].username, role: user[0].role };
    res.redirect('/admin/dashboard');
  } catch (err) {
    console.error('Admin Login Error:', err);
    res.status(500).send('Server Error');
  }
};

const dashboard = async (req, res) => {
  try {
    const db = await connectDB();

    const [newsCount] = await db.execute('SELECT COUNT(*) AS count FROM news');
    const [galleryCount] = await db.execute('SELECT COUNT(*) AS count FROM gallery');

    res.render('admin/dashboard', {
      newsCount: newsCount[0].count,
      galleryCount: galleryCount[0].count
    });
  } catch (err) {
    console.error('Admin Dashboard Error:', err);
    res.status(500).send('Server Error');
  }
};

const updateSettings = async (req, res) => {
  // Example: update admin password
  const { newPassword } = req.body;
  const userId = req.session.user.id;

  try {
    const db = await connectDB();
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await db.execute('UPDATE users SET password = ? WHERE id = ?', [hashedPassword, userId]);
    res.render('admin/settings', { success: 'Password updated successfully' });
  } catch (err) {
    console.error('Admin Settings Error:', err);
    res.status(500).send('Server Error');
  }
};

module.exports = { login, dashboard, updateSettings };

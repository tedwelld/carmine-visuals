// utils/auth.js

// Middleware to check if the user is logged in as admin
exports.isAdmin = (req, res, next) => {
  if (req.session && req.session.user) {
    next();
  } else {
    res.redirect('/admin/login');
  }
};

// Middleware to redirect logged-in admin away from login page
exports.redirectIfAuthenticated = (req, res, next) => {
  if (req.session && req.session.user) {
    res.redirect('/admin/dashboard');
  } else {
    next();
  }
};
function ensureAdmin(req, res, next) {
  if (req.session && req.session.user && req.session.user.role === 'admin') {
    return next();
  }
  res.redirect('/admin/login');
}

module.exports = { ensureAdmin };

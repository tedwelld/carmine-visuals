const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('connect-flash');
require('dotenv').config();

const { dbConfig, connectDB } = require('./config/db');

// Routes
const indexRoutes = require('./routes/index');
const newsRoutes = require('./routes/news');
const galleryRoutes = require('./routes/gallery');
const adminRoutes = require('./routes/admin');

const app = express();

// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sessions
app.use(session({
  secret: process.env.SESSION_SECRET || 'secretKey',
  resave: false,
  saveUninitialized: false
}));

// Flash messages
app.use(flash());

// Make flash messages accessible in EJS
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// Database
app.locals.dbConfig = dbConfig;
connectDB();

// Routes
app.use('/', indexRoutes);
app.use('/news', newsRoutes);
app.use('/gallery', galleryRoutes);
app.use('/admin', adminRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
app.get('/', async (req, res) => {
    // Fetch latest news if needed
    const latestNews = await getLatestNews(); // replace with your function
    res.render('home', {
        title: 'Home | Carmine Visual Africa', // <-- pass title here
        latestNews
    });
    
});

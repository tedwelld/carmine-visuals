// controllers/newsController.js
const { connectDB } = require('../config/db');

const getAllNews = async (req, res) => {
  try {
    const db = await connectDB();
    const [news] = await db.execute(
      'SELECT id, title, content, image, created_at FROM news ORDER BY created_at DESC'
    );
    res.render('news', { news });
  } catch (err) {
    console.error('News Controller Error:', err);
    res.status(500).send('Server Error');
  }
};

const getNewsById = async (req, res) => {
  try {
    const db = await connectDB();
    const [newsItem] = await db.execute(
      'SELECT id, title, content, image, created_at FROM news WHERE id = ?',
      [req.params.id]
    );

    if (newsItem.length === 0) {
      return res.status(404).send('News Not Found');
    }

    res.render('news-view', { news: newsItem[0] });
  } catch (err) {
    console.error('News Controller Error:', err);
    res.status(500).send('Server Error');
  }
};

module.exports = { getAllNews, getNewsById };

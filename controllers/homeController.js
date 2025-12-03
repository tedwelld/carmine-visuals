// controllers/homeController.js
const { connectDB } = require('../config/db');

const getHome = async (req, res) => {
  try {
    const db = await connectDB();

    // Fetch latest news (5 items)
    const [news] = await db.execute(
      'SELECT id, title, content, image, created_at FROM news ORDER BY created_at DESC LIMIT 5'
    );

    // Fetch services
    const [services] = await db.execute(
      'SELECT name, description FROM services ORDER BY id ASC'
    );

    res.render('home', {
      news,
      services,
      vision: "To inspire a world where Africa’s wildlife, people, and natural heritage are celebrated...",
      mission: "Carmine Visuals Africa empowers communities and youth to tell their own conservation stories...",
      coreValues: [
        "Ownership of Our Stories",
        "Conservation First",
        "Youth Empowerment & Future Leadership",
        "Community Inclusion",
        "Integrity & Professionalism"
      ]
    });
  } catch (err) {
    console.error('Home Controller Error:', err);
    res.status(500).send('Server Error');
  }
};

module.exports = { getHome };

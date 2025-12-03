Carmine Visuals Africa – Web Platform

A dynamic Node.js + Express web system designed for storytelling, conservation communication, youth empowerment, and media education.
It provides a clean public-facing website and an admin-driven content management workflow, powered by MySQL and EJS templates.

🚀 Features
Public Website

Displays latest news, stories, and updates.

Showcases services offered by Carmine Visuals Africa.

Highlights organization mission, vision, and core values.

Fully responsive, SEO-friendly, and fast-loading.

Admin Panel

Manage news posts (create, edit, delete).

Manage services and site content.

Secured authentication and session handling.

Simple panel for easy updates without editing code.

Backend

Node.js + Express server architecture.

Modular controllers for clean logic separation.

MySQL database accessed through async queries.

EJS view engine for dynamic HTML rendering.

Centralized database config with connection pooling.

📁 Project Structure
carmine-visuals/
│
├── app.js / server.js         # Main application entry point
├── config/
│   └── db.js                   # MySQL connection logic
├── controllers/
│   ├── homeController.js
│   └── adminController.js
├── public/                     # CSS, JS, images
├── views/
│   ├── home.ejs
│   ├── admin.ejs
│   └── partials/               # header, footer, nav, etc.
├── routes/
│   ├── home.js
│   └── admin.js
└── package.json

🛠️ Tech Stack

Node.js

Express.js

MySQL

EJS Templates

Session-based Auth

HTML / CSS / JS

⚙️ Setup Instructions
1. Install dependencies
npm install

2. Create .env file
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=carmine_visuals
SESSION_SECRET=your_secret

3. Run migrations or SQL setup

Import your SQL schema into MySQL or create tables manually.

4. Start the server
npm start


or (if using nodemon):

npm run dev

🔍 Development Tools

To run with VS Code debugger, use this launch config:

{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Carmine Visuals",
      "program": "${workspaceFolder}/server.js",
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}

📌 Future Improvements

Rich text editor for news content.

Automated image optimization.

Admin role permissions.

API endpoints for mobile apps.

Dedicated media gallery.

🐛 Troubleshooting
Common Errors

“title is not defined”
Pass title in res.render() or remove it from the partial.

“latestNews is not defined”
Rename variable or pass latestNews: news from controller.

Database connection errors
Confirm .env values and MySQL is running.

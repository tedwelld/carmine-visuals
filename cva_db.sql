-- =========================================
-- Carmine Visuals Africa MySQL Database
-- Compatible with XAMPP
-- =========================================

-- 1. Create database
CREATE DATABASE IF NOT EXISTS cva_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE cva_db;

-- 2. Users table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin','editor','viewer') DEFAULT 'viewer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert example admin user (password: "admin123" hashed with bcrypt recommended)
-- Replace the hashed password with your bcrypt hash
INSERT INTO users (username, password, role) VALUES 
('admin', '$2b$10$EXAMPLEBCRYPTEDPASSWORDHASH', 'admin');

-- 3. News table
CREATE TABLE IF NOT EXISTS news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    image VARCHAR(255) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Gallery table
CREATE TABLE IF NOT EXISTS gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Services table
CREATE TABLE IF NOT EXISTS services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

-- Insert default services from the document
INSERT INTO services (name, description) VALUES
('Wildlife photography & visual narratives', 'Documenting wildlife through photography and visual storytelling.'),
('Short films & documentaries', 'Producing short films and documentaries highlighting conservation stories.'),
('Podcasts featuring conservation issues, culture, and community voices', 'Podcasts addressing conservation topics and community narratives.'),
('Blogs, newsletters, and digital storytelling', 'Digital media content to inform and educate audiences about wildlife and conservation.'),
('Media partnerships with lodges & conservation organisations', 'Collaborations with tourism lodges and conservation organizations.');

-- =========================================
-- Optional: Add indexes for faster queries
CREATE INDEX idx_news_created ON news(created_at);
CREATE INDEX idx_gallery_created ON gallery(created_at);

-- =========================================
-- Example: Insert sample news
INSERT INTO news (title, content, image) VALUES
('CVA Launches New Storytelling Program', 'Carmine Visuals Africa launches an initiative to empower youth in conservation storytelling.', 'news1.jpg');

-- Example: Insert sample gallery items
INSERT INTO gallery (title, image) VALUES
('Elephants at Hwange National Park', 'elephants1.jpg'),
('Community Workshop', 'workshop1.jpg');

-- =========================================
-- End of SQL file

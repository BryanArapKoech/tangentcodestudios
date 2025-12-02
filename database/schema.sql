-- Drop tables if they exist to start fresh
DROP TABLE IF EXISTS leads;
DROP TABLE IF EXISTS projects;

-- Projects Table (Portfolio Items)
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    category VARCHAR(50) NOT NULL, -- e.g., 'Web', 'UI', 'App'
    image_url TEXT,
    content JSONB, -- Stores details like client info, challenge, solution
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Leads Table (Contact Form Submissions)
CREATE TABLE leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    project_type VARCHAR(100),
    budget VARCHAR(100),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
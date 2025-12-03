const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const pool = require('./config/db'); // Import DB connection

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from /public
app.use(express.static('public'));

// --- API ROUTES ---

// GET /api/projects (with optional ?category= filter)
app.get('/api/projects', async (req, res) => {
  try {
    const { category } = req.query;
    let query = 'SELECT * FROM projects';
    let params = [];

    if (category) {
      query += ' WHERE category = $1';
      params.push(category);
    }
    
    query += ' ORDER BY id ASC';

    const result = await pool.query(query, params);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/projects/:slug (Single Project)
app.get('/api/projects/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const result = await pool.query('SELECT * FROM projects WHERE slug = $1', [slug]);
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Project not found' });
    }
    
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// POST /api/contact
app.post('/api/contact', async (req, res) => {
  const { name, email, project_type, budget, message } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required.' });
  }

  try {
    const query = `
      INSERT INTO leads (name, email, project_type, budget, message)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;
    const values = [name, email, project_type, budget, message];
    
    const result = await pool.query(query, values);
    
    res.status(201).json({ 
      message: 'Lead saved successfully', 
      lead: result.rows[0] 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error processing contact form' });
  }
});

// 
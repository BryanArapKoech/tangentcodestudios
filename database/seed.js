const pool = require('../config/db');

const projects = [
  {
    title: 'Modern E-Commerce',
    slug: 'modern-ecommerce',
    category: 'Web',
    image_url: 'https://placehold.co/600x400/252525/FFF?text=Web+Project',
    content: {
      client: 'Retail Corp',
      challenge: 'Outdated design and low conversion.',
      solution: 'Full jamstack rebuild with Next.js.'
    }
  },
  {
    title: 'FinTech Dashboard',
    slug: 'fintech-dashboard',
    category: 'UI',
    image_url: 'https://placehold.co/600x400/252525/FFF?text=UI+Design',
    content: {
      client: 'BankFlow',
      challenge: 'Complex data visualization.',
      solution: 'Clean, dark-mode UI with D3.js charts.'
    }
  },
  {
    title: 'Travel Companion App',
    slug: 'travel-app',
    category: 'App',
    image_url: 'https://placehold.co/600x400/252525/FFF?text=Mobile+App',
    content: {
      client: 'Wanderlust',
      challenge: 'Offline functionality needed.',
      solution: 'React Native app with local caching.'
    }
  }
];

const seed = async () => {
  try {
    console.log('Seeding projects...');
    // Clear existing data to avoid duplicates
    await pool.query('DELETE FROM projects');

    for (const p of projects) {
      await pool.query(
        'INSERT INTO projects (title, slug, category, image_url, content) VALUES ($1, $2, $3, $4, $5)',
        [p.title, p.slug, p.category, p.image_url, p.content]
      );
    }
    console.log('Successfully seeded 3 projects.');
  } catch (err) {
    console.error('Seed error:', err);
  } finally {
    pool.end();
  }
};

seed();
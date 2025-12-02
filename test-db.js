const pool = require('./config/db');

(async () => {
  console.log('Attempting to connect...');
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Database connected successfully:', res.rows[0]);
  } catch (err) {
    console.error('Database connection error:', err);
  } finally {
    pool.end();
  }
})();
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pool from './db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.get('/api/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() as current_time, version() as db_version');
    res.json({ 
      status: 'success', 
      message: 'Database connected successfully',
      data: result.rows[0]
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'Database connection failed',
      error: error.message 
    });
  }
});

app.get('/api/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY id');
    res.json({ status: 'success', data: result.rows });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.json({ status: 'success', data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.post('/api/auth/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // For prototype/hackathon purposes we insert name & email. 
    // Note: To store passwords, you would need to alter the users table and use bcrypt.
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.json({ 
      status: 'success', 
      data: {
        user: result.rows[0],
        accessToken: 'mock-access-token',
        refreshToken: 'mock-refresh-token',
        isNew: true
      } 
    });
  } catch (error) {
    // if email exists, pg throws an error it can be caught here
    if (error.code === '23505') {
      return res.status(400).json({ status: 'error', message: 'Email already exists' });
    }
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    if (result.rows.length === 0) {
       return res.status(401).json({ status: 'error', message: 'Invalid credentials' });
    }
    res.json({ 
      status: 'success', 
      data: {
        user: result.rows[0],
        accessToken: 'mock-access-token',
        refreshToken: 'mock-refresh-token',
        isNew: false
      } 
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Loaded' : 'Missing');
  
  try {
    // Test connection first
    const testResult = await pool.query('SELECT NOW()');
    console.log('Database connected successfully at:', testResult.rows[0].now);
    
    // Create table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Database table initialized');
  } catch (error) {
    console.error('Database initialization error:', error.message);
    console.error('Full error:', error);
  }
});

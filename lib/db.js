// lib/db.js
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres', // replace with your DB user
  host: 'localhost',
  database: 'stylehub_db', // replace with your DB name
  password: 'cveto0449', // replace with your DB password
  port: 5432,
});

export async function query(text, params) {
    console.log('Executing query:', text);
    console.log('With parameters:', params);
    
    const start = Date.now();
    try {
      const res = await pool.query(text, params);
      const duration = Date.now() - start;
      console.log('Query executed successfully', { 
        text, 
        duration: `${duration}ms`, 
        rows: res.rowCount 
      });
      return res;
    } catch (err) {
      const duration = Date.now() - start;
      console.error('Query failed', { 
        text, 
        duration: `${duration}ms`, 
        error: err.message 
      });
      
      // Enhance error message with more context
      if (err.code === '42P01') {
        err.message = `Table does not exist: ${err.message}`;
      } else if (err.code === '42703') {
        err.message = `Column does not exist: ${err.message}`;
      }
      
      throw err;
    }
  }
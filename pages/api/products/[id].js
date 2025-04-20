// pages/api/products/[id].js
import pool from '../../../lib/db';

// GET a single product by product_id
export async function handler(req, res) {
  const { id } = req.query; // Get product_id from URL

  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM products WHERE product_id = $1', [id]);
      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0]);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch product' });
    }
  } else if (req.method === 'PUT') {
    const { name, description, price, image } = req.body;
    try {
      const result = await pool.query(
        'UPDATE products SET name = $1, description = $2, price = $3, image = $4 WHERE product_id = $5 RETURNING *',
        [name, description, price, image, id]
      );
      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0]);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  } else if (req.method === 'DELETE') {
    try {
      const result = await pool.query('DELETE FROM products WHERE product_id = $1 RETURNING *', [id]);
      if (result.rows.length > 0) {
        res.status(200).json(result.rows[0]);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

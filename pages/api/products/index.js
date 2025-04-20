import { query } from '@/lib/db';

export default async function handler(req, res) {
  console.log('API route /api/products called');
  console.log('Request query params:', req.query);

  if (req.method === 'GET') {
    try {
      console.log('Fetching all products');
      let result;
      
      try {
        // First check if created_at column exists
        const columnsCheck = await query(`
          SELECT column_name
          FROM information_schema.columns
          WHERE table_schema = 'public' AND table_name = 'products' AND column_name = 'created_at'
        `, []);
        
        const hasCreatedAt = columnsCheck.rows.length > 0;
        
        if (hasCreatedAt) {
          // Use created_at for ordering
          result = await query(
            'SELECT * FROM products ORDER BY created_at DESC',
            []
          );
        } else {
          // Fallback to id if created_at doesn't exist
          console.log('created_at column not found, using id for ordering instead');
          result = await query(
            'SELECT * FROM products ORDER BY id DESC',
            []
          );
        }
      } catch (queryError) {
        // If specific error, try a more basic query
        console.error('Initial query failed:', queryError.message);
        console.log('Trying fallback query without ordering');
        result = await query(
          'SELECT * FROM products',
          []
        );
      }
      
      console.log(`Successfully retrieved ${result.rows.length} products`);
      return res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error in products API route:', error);
      return res.status(500).json({
        message: 'Internal server error',
        error: error.message
      });
    }
  }
  
  return res.status(405).json({ message: 'Method not allowed' });
}
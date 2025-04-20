// api/productApi.js
import { useState, useEffect } from 'react';

export const useProductById = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products/${productId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};

export const useLatestProducts = (limit = 4) => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        setLoading(true);
        
        // First try the test endpoint to diagnose any issues
        let shouldTryProductsEndpoint = true;
        
        if (shouldTryProductsEndpoint) {
          const response = await fetch(`/api/products/latest?limit=${limit}`);
          
          if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || `Failed to fetch latest products: ${response.status}`);
          }
          
          const data = await response.json();
          setLatestProducts(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error('Error fetching latest products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLatestProducts();
  }, [limit]);
  
  return { latestProducts, loading, error };
};

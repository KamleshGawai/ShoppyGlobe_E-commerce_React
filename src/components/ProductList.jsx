import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ showNotification }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        showNotification('Failed to fetch products', 'error'); // Handle error
        setLoading(false);
      }
    };

    fetchProducts();
  }, [showNotification]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          showNotification={showNotification} // Pass the notification function
          
        />
        
      ))}
    </div>
  );
};

export default ProductList;

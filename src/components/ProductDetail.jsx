import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(setError)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="text-center text-lg">Loading product details...</div>;
  if (error) return <div className="text-center text-red-500">Failed to load product details.</div>;

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className="w-full h-96 object-cover my-4 rounded-md"
      />
      <p className="text-gray-700">${product.price}</p>
      <p className="mt-4 text-gray-600">{product.description}</p>
      
    </div>
  );
};

export default ProductDetail;

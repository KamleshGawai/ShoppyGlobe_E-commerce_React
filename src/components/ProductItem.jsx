import React, { Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import Loader from './Loader'; // Import the Loader component

const LazyImage = lazy(() => import('./LazyImage')); // Lazy load the image component

const ProductItem = ({ product, showNotification }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    showNotification(`${product.title} added to the cart!`, 'success'); // Call notification here
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white">
      <Suspense fallback={<Loader />}>  {/* Use Suspense to show the loader while the image is loading */}
        <LazyImage src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover mb-4 rounded-md" />
      </Suspense>
      <h2 className="text-xl font-semibold text-gray-800">{product.title}</h2>
      <p className="text-gray-600 mt-2">${product.price}</p>
      <div className="mt-4 flex justify-between items-center">
        <button 
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
        
        {/* View Details button */}
        <Link 
          to={`/product/${product.id}`} 
          className="text-blue-500 hover:underline ml-4"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;

import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';

const CartItem = ({ item, showNotification }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
    showNotification(`${item.title} removed from the cart!`, 'error'); // Show notification
  };

  return (
    <div className="border p-4 mb-4 flex justify-between items-center bg-white rounded-lg shadow-md">
      <div>
        
        <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
        <p className="text-gray-500">${item.price}</p>
      </div>
      <button 
        className="bg-red-600 text-white py-1 px-4 rounded-md hover:bg-red-700 transition"
        onClick={handleRemoveFromCart}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;

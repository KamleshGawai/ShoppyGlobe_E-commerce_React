import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = ({ showNotification }) => {
  const cartItems = useSelector(state => state.cart.items);

  if (cartItems.length === 0) return <div className="text-center text-lg mt-8">Your cart is empty</div>;

  return (
    <div className="mt-8">
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} showNotification={showNotification} />
      ))}
    </div>
  );
};

export default Cart;

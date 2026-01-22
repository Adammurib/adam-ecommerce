import { useCart } from '../context/CartContext';
import { Product } from '../types/product'; // Import your type

// Define what a cart item looks like for the total calculation
interface CartItem extends Product {
  quantity: number;
}

const Cart = () => {
  const { cart } = useCart();

  // FIX: Explicitly type 'sum' and use the CartItem type for 'item'
  const total = cart.reduce((sum: number, item: CartItem) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item: any) => (
            <div key={item.id} style={itemStyle as React.CSSProperties}>
              <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
              <div style={{ flex: 1, marginLeft: '20px' }}>
                <h4 style={{ margin: 0 }}>{item.title}</h4>
                <p style={{ margin: 0, color: '#666' }}>${item.price} x {item.quantity}</p>
              </div>
              <p style={{ fontWeight: 'bold' }}>${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div style={{ textAlign: 'right', marginTop: '20px', borderTop: '2px solid #eee', paddingTop: '20px' }}>
            <h2>Total: ${total.toFixed(2)}</h2>
            <button style={checkoutButtonStyle as React.CSSProperties}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

// Styles defined clearly
const itemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px 0',
  borderBottom: '1px solid #eee'
};

const checkoutButtonStyle = {
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '5px',
  fontSize: '1.1rem',
  cursor: 'pointer',
  marginTop: '10px'
};

export default Cart;
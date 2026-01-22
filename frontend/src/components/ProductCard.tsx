import { Product } from '../types/product';
import { useCart } from '../context/CartContext';

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { addToCart } = useCart();

  return (
    <div style={cardStyle}>
      <img 
        src={product.image} 
        alt={product.title} 
        style={imageStyle} 
      />
      <h3 style={{ fontSize: '1rem', height: '3rem', overflow: 'hidden' }}>
        {product.title}
      </h3>
      <p style={{ fontWeight: 'bold' }}>${product.price}</p>
      <button 
        style={buttonStyle} 
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

// --- STYLES DEFINED HERE ---
const cardStyle: React.CSSProperties = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '15px',
  textAlign: 'center',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%'
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '150px',
  objectFit: 'contain',
  marginBottom: '10px'
};

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '10px',
  borderRadius: '4px',
  cursor: 'pointer',
  marginTop: 'auto'
};

export default ProductCard;
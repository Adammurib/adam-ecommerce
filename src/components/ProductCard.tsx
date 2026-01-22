// src/components/ProductCard.tsx
import { Product } from '../types/product'; 

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div style={cardStyle}>
      <img 
        src={product.image} 
        alt={product.title} 
        style={{ width: '100%', height: '150px', objectFit: 'contain' }} 
      />
      <h3 style={{ fontSize: '1rem', margin: '10px 0', height: '40px', overflow: 'hidden' }}>
        {product.title}
      </h3>
      <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>${product.price}</p>
      <button style={buttonStyle}>Add to Cart</button>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #eee',
  padding: '15px',
  borderRadius: '10px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
  textAlign: 'center' as const
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  padding: '8px 15px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '10px',
  width: '100%'
};

export default ProductCard;
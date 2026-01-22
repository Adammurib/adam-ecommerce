import { Product } from '../types/product';
import { useCart } from '../context/CartContext'; // This was the "unused" import

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  // 1. Call the hook to get the addToCart function
  const { addToCart } = useCart(); 

  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.title} style={imageStyle} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      
      {/* 2. Connect the function to the button click */}
      <button 
        style={buttonStyle} 
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

// ... keep your styles (cardStyle, imageStyle, buttonStyle) below
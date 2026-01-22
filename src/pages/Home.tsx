// src/pages/Home.tsx
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';

const Home = () => {
  const tempProducts: Product[] = [
    {
      id: 1,
      title: "Premium Headphones",
      price: 299.99,
      description: "High quality sound.",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 150.00,
      description: "Track your fitness.",
      category: "electronics",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
      id: 3,
      title: "Leather Backpack",
      price: 85.00,
      description: "Stylish and durable.",
      category: "accessories",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400"
    }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Collection</h1>
      <div style={gridStyle}>
        {tempProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '25px',
  maxWidth: '1200px',
  margin: '0 auto'
};

export default Home;
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';

const Home = () => {
  const [newPassword, setNewPassword] = useState('');
  const userEmail = localStorage.getItem('userEmail');

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

  // --- CRUD ACTIONS ---

  // 1. UPDATE (U)
  const handleUpdatePassword = async () => {
    if (!newPassword) return alert("Please enter a new password");
    
    const response = await fetch('http://localhost:5000/api/auth/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userEmail, newPassword }),
    });
    const data = await response.json();
    if (data.success) {
      alert("Password Updated Successfully!");
      setNewPassword('');
    }
  };

  // 2. DELETE (D)
  const handleDeleteAccount = async () => {
    if (window.confirm("WARNING: Are you sure? This will permanently delete your account.")) {
      const response = await fetch('http://localhost:5000/api/auth/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail }),
      });
      const data = await response.json();
      if (data.success) {
        localStorage.clear();
        window.location.href = '/'; // Redirect to login
      }
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      {/* Account Settings Section (CRUD Demo) */}
      <div style={settingsBoxStyle}>
        <h3>Account Settings ({userEmail})</h3>
        <input 
          type="password" 
          placeholder="New Password" 
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleUpdatePassword} style={updateBtnStyle}>Update Password</button>
        <button onClick={handleDeleteAccount} style={deleteBtnStyle}>Delete My Account</button>
      </div>

      <hr style={{ margin: '40px 0', opacity: '0.2' }} />

      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Collection</h1>
      <div style={gridStyle}>
        {tempProducts.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
};

// --- STYLES ---

const settingsBoxStyle = {
  background: '#f4f4f4',
  padding: '20px',
  borderRadius: '8px',
  maxWidth: '600px',
  margin: '0 auto 40px auto',
  textAlign: 'center' as const
};

const inputStyle = { padding: '8px', marginRight: '10px' };
const updateBtnStyle = { padding: '8px 15px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginRight: '10px' };
const deleteBtnStyle = { padding: '8px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' };

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
  gap: '25px',
  maxWidth: '1200px',
  margin: '0 auto'
};

export default Home;
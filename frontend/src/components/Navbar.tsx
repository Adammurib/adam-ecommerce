import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { totalItems } = useCart();
  const navigate = useNavigate();
  
  // Check if user is logged in
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail'); // Matches your Login.tsx key
    navigate('/'); // Navigate to root (Login page)
  };

  return (
    <nav style={navStyle}>
      {/* FIX: Redirect Logo to /products if logged in, otherwise to login page */}
      <Link to={isAuthenticated ? "/products" : "/"} style={logoStyle}>
        My Store
      </Link>
      
      <div style={linkContainer}>
        {/* FIX: Link to /products instead of / */}
        {isAuthenticated && (
          <Link to="/products" style={linkStyle}>Home</Link>
        )}
        
        {/* Only show Cart if logged in */}
        {isAuthenticated && (
          <Link to="/cart" style={linkStyle}>
            Cart ({totalItems})
          </Link>
        )}

        {/* Conditional Login/Logout Button */}
        {isAuthenticated ? (
          <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
        ) : (
          <Link to="/" style={linkStyle}>Login</Link>
        )}
      </div>
    </nav>
  );
};

// --- STYLES (No changes needed here) ---
const navStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  backgroundColor: '#333',
  color: 'white',
  alignItems: 'center'
};

const logoStyle = { color: 'white', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 'bold' };
const linkContainer = { display: 'flex', gap: '20px', alignItems: 'center' };
const linkStyle = { color: 'white', textDecoration: 'none' };
const logoutButtonStyle = { 
  backgroundColor: '#dc3545', 
  color: 'white', 
  border: 'none', 
  padding: '5px 10px', 
  borderRadius: '4px', 
  cursor: 'pointer' 
};

export default Navbar;
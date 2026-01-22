import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false); // FOR LOADER
  const [message, setMessage] = useState(''); // FOR NOTIFICATION
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    // Simulate an API calling delay (Best Practice)
    setTimeout(() => {
      localStorage.setItem('token', 'fake-jwt-token');
      setIsLoading(false);
      setMessage('Login successful! Redirecting...'); // Notification text
      
      // Delay navigation slightly so user sees the success message
      setTimeout(() => navigate('/'), 1000);
    }, 1500); 
  };

  return (
    <div style={loginContainer}>
      <form onSubmit={handleLogin} style={formStyle}>
        <h2>Login</h2>
        
        {/* NOTIFICATION SECTION */}
        {message && <div style={notificationStyle}>{message}</div>}

        <input 
          type="email" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={inputStyle} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={inputStyle} 
        />

        {/* LOADER SPINNER LOGIC */}
        <button type="submit" style={loginButtonStyle} disabled={isLoading}>
          {isLoading ? <span className="spinner-small"></span> : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

// --- STYLES ---
const loginContainer = { display: 'flex', justifyContent: 'center', marginTop: '100px' };
const formStyle = { 
  display: 'flex', 
  flexDirection: 'column' as const, 
  gap: '15px', 
  width: '320px', 
  padding: '20px', 
  border: '1px solid #ddd', 
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
};
const inputStyle = { padding: '12px', borderRadius: '4px', border: '1px solid #ccc' };
const loginButtonStyle = { 
  padding: '12px', 
  backgroundColor: '#007bff', 
  color: 'white', 
  border: 'none', 
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const notificationStyle = {
  padding: '10px',
  backgroundColor: '#d4edda',
  color: '#155724',
  borderRadius: '4px',
  fontSize: '0.9rem',
  textAlign: 'center' as const
};

export default Login;
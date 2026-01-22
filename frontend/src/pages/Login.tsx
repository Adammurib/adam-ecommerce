import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    console.log("Attempting login with:", { email, password });

    setTimeout(() => {
      localStorage.setItem('token', 'fake-jwt-token');
      localStorage.setItem('userEmail', email); 

      setIsLoading(false);
      setMessage(`Success! Welcome back, ${email}.`); 
      
      // FIX: Redirect to /products instead of /
      setTimeout(() => navigate('/products'), 1000);
    }, 1500); 
  };

  return (
    <div style={loginContainer}>
      <form onSubmit={handleLogin} style={formStyle}>
        <h2>Login</h2>
        
        {message && <div style={notificationStyle}>{message}</div>}

        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required 
          style={inputStyle} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          required 
          style={inputStyle} 
        />

        <button type="submit" style={loginButtonStyle} disabled={isLoading}>
          {isLoading ? <span className="spinner-small"></span> : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

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
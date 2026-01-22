import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic: If successful, save token and navigate
    localStorage.setItem('token', 'fake-jwt-token');
    navigate('/');
  };

  return (
    <div style={loginContainer}>
      <form onSubmit={handleLogin} style={formStyle}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required style={inputStyle} />
        <button type="submit" style={loginButtonStyle}>Sign In</button>
      </form>
    </div>
  );
};

// Styles (minimal for now)
const loginContainer = { display: 'flex', justifyContent: 'center', marginTop: '100px' };
const formStyle = { display: 'flex', flexDirection: 'column' as const, gap: '10px', width: '300px' };
const inputStyle = { padding: '10px', borderRadius: '4px', border: '1px solid #ccc' };
const loginButtonStyle = { padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' };

export default Login;
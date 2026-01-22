import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (data.success) {
        alert("Registration Successful! Please login.");
        navigate('/'); // Send them to login page
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error connecting to server.");
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Create Account</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required /><br /><br />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required /><br /><br />
        <button type="submit">Register</button>
      </form>
      {message && <p style={{ color: 'red' }}>{message}</p>}
      <p>Already have an account? <Link to="/">Login here</Link></p>
    </div>
  );
};

export default Register;
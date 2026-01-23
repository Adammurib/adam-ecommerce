const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      // URL updated to match /api/auth/register
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        alert("Registration Successful! Please login.");
        navigate('/'); 
      } else {
        setMessage(data.message || "Registration failed");
      }
    } catch (error) {
      setMessage("Error connecting to server.");
    }
  };
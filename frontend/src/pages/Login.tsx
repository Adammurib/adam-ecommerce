const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      // URL updated to match the new professional routes
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', 'fake-jwt-token'); 
        localStorage.setItem('userEmail', email);
        setMessage(`Success! Welcome back.`);
        setTimeout(() => navigate('/products'), 1000);
      } else {
        setMessage(data.message || 'Invalid credentials');
      }
    } catch (error) {
      setMessage('Server error. Is the backend running?');
    } finally {
      setIsLoading(false);
    }
  };
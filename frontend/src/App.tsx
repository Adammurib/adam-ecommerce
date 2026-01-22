import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register'; // <-- 1. Import the new Register page
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import { AuthGuard } from './guards/AuthGuard';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* 1. Login is the starting page (Root) */}
          <Route path="/" element={<Login />} />

          {/* 2. Register Page (New!) */}
          <Route path="/register" element={<Register />} /> 

          {/* 3. Home/Products is PROTECTED */}
          <Route 
            path="/products" 
            element={
              <AuthGuard>
                <Home />
              </AuthGuard>
            } 
          />

          {/* 4. Cart is PROTECTED */}
          <Route 
            path="/cart" 
            element={
              <AuthGuard>
                <Cart />
              </AuthGuard>
            } 
          />

          {/* 5. Best Practice: Redirect any unknown URL back to Login */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
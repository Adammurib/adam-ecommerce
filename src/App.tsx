import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login'; // We will create this next
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import { AuthGuard } from './guards/AuthGuard'; // We will create this next

function App() {
  return (
    /* 1. Wrap everything in the Provider so all pages see the Cart */
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />

          {/* 2. Protected Route: Only logged-in users can see the Cart */}
          <Route 
            path="/cart" 
            element={
              <AuthGuard>
                <Cart />
              </AuthGuard>
            } 
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
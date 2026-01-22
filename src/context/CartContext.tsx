import { createContext, useState, useContext, ReactNode } from 'react';
import { Product } from '../types/product';

// 1. Define what is inside our Cart
interface CartItem extends Product {
  quantity: number;
}

// 2. Define the "Menu" of things other components can use
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void; // ADDED THIS
  totalItems: number;
}

// 3. Create the actual Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// 4. The "Provider" - this wraps the app and holds the data
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function to add items or increase quantity if already there
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // NEW: Function to remove an item entirely from the cart
  const removeFromCart = (productId: number) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // Helper to count total items for the Navbar badge
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    // ADDED removeFromCart to the value provider below
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

// 5. The "Hook" - this is what ProductCard and Cart.tsx call to get the data
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
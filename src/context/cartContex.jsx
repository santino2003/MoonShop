import React, { createContext, useContext, useState, useEffect } from 'react';


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    const existingItem = cart.find(item => item.product.id === product.id);

    if (existingItem) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      const updatedCart = cart.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCart(updatedCart);
    } else {
      // Si el producto no está en el carrito, agrégalo
      setCart([...cart, { product, quantity }]);
    }
  };

  const removeFromCart = (productId, quantity = 1) => {
    const updatedCart = cart.map(item =>
      item.product.id === productId
        ? { ...item, quantity: Math.max(0, item.quantity - quantity) }
        : item
    );

    setCart(updatedCart.filter(item => item.quantity > 0));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.product.precio * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser utilizado dentro de un CartProvider');
  }
  return context;
};


export default CartProvider
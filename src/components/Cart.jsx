// Cart.js
import React from 'react';
import {useCart} from '../context/cartContex'
import CartItem from './CartItem';

const Cart = () => {
  const { cart, clearCart, getTotalItems, getTotalPrice } = useCart();

  return (
    <div className='text-center'>
      <h2>Carrito de Compras</h2>
      {cart.map((item, index) => (
        <CartItem key={index} item={item} />
      ))}
      <p>Total de artículos: {getTotalItems()}</p>
      <p>Total a pagar: ${getTotalPrice()}</p>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};

export default Cart;

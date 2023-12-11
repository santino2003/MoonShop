// Cart.js
import React from 'react';
import {useCart} from '../context/cartContex'
import CartItem from './CartItem';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, getTotalItems, getTotalPrice } = useCart();
    if (getTotalItems() != 0){
        
        return (
            <div className='text-center'>
            <h2>Carrito de Compras</h2>
            {cart.map((item, index) => (
                <CartItem key={index} item={item} />
            ))}
            
            <p>Total de artículos: {getTotalItems()}</p>
            <p>Total a pagar: ${getTotalPrice()}</p>
            <Link to='/confirmacion'>
                <Button variant="primary" style={{ marginRight: '1rem' }} >Comprar</Button>
            </Link>
            
            <Button variant="primary"  onClick={() => clearCart()} >Vaciar Carrito</Button>
            
           
            </div>
      );
    }else{
        return(
            <h2 className='text-center'>El carrito esta vacio</h2>
        )
    }
   
};

export default Cart;

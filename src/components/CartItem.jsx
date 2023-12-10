// CartItem.js
import React from 'react';
import { useCart } from '../context/cartContex';
import { Col ,Row} from 'react-bootstrap'

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <Row>
      <p>{item.product.nombre} - Cantidad: {item.quantity}</p>
      <button onClick={() => removeFromCart(item.product.id)}>Eliminar del carrito</button>
    </Row>
  );
};

export default CartItem;

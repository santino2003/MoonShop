
// CartItem.js
import React from 'react';
import { useCart } from '../context/cartContex';
import { Card,  Row,Col,Button} from 'react-bootstrap';


const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
  
    
      
    
      <Row className='d-flex justify-content-center align-items-center'>
        
        <Col>
            <Card.Img style={{width: '16rem', height :"16rem"}} variant="top" src={item.product.img} /> 
        </Col>
        <Col>
            <Card.Title>{item.product.nombre}</Card.Title>
        </Col>
        <Col>
            <Card.Text>Cantidad: {item.quantity}</Card.Text>
        </Col>
        <Col>
            <Card.Text>Price: ${item.product.precio}</Card.Text>
        </Col>        
        <Col>
            <Button variant="primary"  onClick={() => removeFromCart(item.product.id)} >Eliminar Prenda</Button>
        
        </Col>
                
                

       
       
      </Row>
      



   
  );
};

export default CartItem;

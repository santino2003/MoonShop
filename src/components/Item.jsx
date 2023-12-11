import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    return (
        <Card style={{  width: '16rem', marginBottom: '20px'}}>
          <Card.Img style={{width: '16rem', height :"16rem"}} variant="top" src={item.img} /> 
          <Card.Body className="text-center">
            <Card.Title>{item.nombre}</Card.Title>
            <Card.Text>Precio: ${item.precio}</Card.Text>
            <Link to={`/item/${item.id}`}>
              <Button variant="primary">Detalles</Button>
            </Link>
            
          </Card.Body>
        </Card>
      );
};

export default Item
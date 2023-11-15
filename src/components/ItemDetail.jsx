import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ItemDetail= ({item}) => {
    return (
        <Card style={{  width: '18rem', marginBottom: '20px'}}>
          {/* <Card.Img variant="top" src={item.imagenUrl} /> */}
          <Card.Body className="text-center">
            <Card.Title>{item.titulo}</Card.Title>
            <Card.Text>{item.descripcion}</Card.Text>
            <Card.Text>Precio: ${item.precio}</Card.Text>
            <Button variant="primary">Detalles</Button>
          </Card.Body>
        </Card>
      );
};

export default ItemDetail
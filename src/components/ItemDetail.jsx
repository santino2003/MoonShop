import React from 'react'
import Card from 'react-bootstrap/Card';
import Contador from './Contador';

const ItemDetail= ({item}) => {

 
  return (
    <Card style={{  width: '16rem', marginBottom: '20px'}}>
      <Card.Img style={{width: '16rem', height :"16rem"}} variant="top" src={item.img} /> 
          <Card.Body className="text-center">
            <Card.Title>{item.titulo}</Card.Title>
            <Card.Text>{item.descripcion}</Card.Text>
            <Card.Text>Precio: ${item.precio}</Card.Text>
            {console.log(item.precio)}
            <Contador  item={item}/>
            
          </Card.Body>
        </Card>
      );
};

export default ItemDetail
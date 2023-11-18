import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Contador = () => {
  const [count, setCount] = useState(0);

  const sumarContador = () => {
    if(count < 10){
        setCount(count + 1);
    }else{
        alert(`Stock Insuficiente`);
    }
    
  };

  const restarContador = () => {
    if(count > 0){
        setCount(count - 1);
    }
  };

  const mostrarAlert = () => {
    alert(`Se agregaron ${count} productos al carrito`);
  };

  return (
    <Container className="text-center mt-3">
      <Row>
        <Col xs={2}>
          <Button variant="info" size="sm" onClick={restarContador }>
            -
          </Button>
        </Col>
        <Col xs={8}>
          <h3>{count}</h3>
        </Col>
        <Col xs={2}>
          <Button variant="info" size="sm" onClick={sumarContador}>
            +
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col>
          <Button variant="info" size="sm" onClick={mostrarAlert}>
            Agregar al carrito
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Contador;

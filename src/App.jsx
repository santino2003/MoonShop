import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Dropdown } from 'react-bootstrap';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/navbar';


const App = props => {
  const estilo ={
    width: '100%',
    height: '100%',
    
    margin: "0",
    padding: "0",

  }
  const estilo2 ={
    width: '1500px',
    height: '100%',
    backgroundColor: 'lightblue',
  }

  const boton = {
    paddingLeft: '650px'
  }

  const estilo3 ={
    paddingLeft: "255px",
    paddingTop:"45px",
    fontSize:"45px"
  }
  return (
    <Container style={estilo}>
      <Row style={estilo2}>
        <Navbar/>
        <Dropdown style={boton}>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Secciones
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Catalgo</Dropdown.Item>
            <Dropdown.Item href="#/action-2">FAQ</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Sobre Nosotro</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Row>
      <Row style={estilo3}>
        <ItemListContainer/>
      </Row>
      
      
    </Container>
   
  )
}

App.propTypes = {}

export default App
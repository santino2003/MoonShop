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



  const estilo3 ={
    paddingLeft: "255px",
    paddingTop:"45px",
    fontSize:"45px"
  }
  return (
    <Container style={estilo}>
      <Row style={estilo2}>
        <Navbar/>
      </Row>
      <Row style={estilo3}>
        <ItemListContainer greeting={"Bienvendios a MoonShop"}/>
      </Row>
      
      
    </Container>
   
  )
}

App.propTypes = {}

export default App
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Dropdown } from 'react-bootstrap';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/navbar';
import ItemListContainerDetail from './components/ItemListContainerDetail';


const App = props => {
  const estilo ={
    width: '100%',
    height: '100%',
    
    margin: "0",
    padding: "0",

  }
  const estilo2 ={
    width: '223vh',
    height: '100%',
    backgroundColor: 'lightblue',
  }



  const estilo3 ={
    width: '223vh',
    backgroundColor: 'red',

  }
  return (
    <Container style={estilo}>
      <Row style={estilo2}>
        <Navbar/>
      </Row>
      <Row className="justify-content-around" style={estilo3}>
        {/* <ItemListContainer/> */}
        <ItemListContainerDetail/>
      </Row>
      
      
    </Container>
   
  )
}

App.propTypes = {}

export default App
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row,Dropdown } from 'react-bootstrap';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemListContainerDetail from './components/ItemListContainerDetail';
import Counter from './components/Contador';
import {
  BrowserRouter,
  Routes,
  Route} 
from 'react-router-dom'


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
   

  }
  return (
    <BrowserRouter >
      <Container style={estilo}>
        <Row style={estilo2}>
          <Navbar/>
        </Row>

        <Row className="justify-content-around" style={estilo3}>
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />
            <Route exact path='/category/:id' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemListContainerDetail/>} />
          </Routes>
        </Row>
        
        
      </Container>
    </BrowserRouter>
  )
}

App.propTypes = {}

export default App
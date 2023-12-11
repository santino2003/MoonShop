import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'react-bootstrap';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import ItemListContainerDetail from './components/ItemListContainerDetail';
import Cart from './components/Cart';
import {CartProvider} from './context/cartContex';
import {
  BrowserRouter,
  Routes,
  Route} 
from 'react-router-dom'
import SendOrder from './components/SendOrder';



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
      <CartProvider>
        <Container style={estilo}>
          <Row style={estilo2}>
            <Navbar/>
          </Row>

          <Row className="justify-content-around" style={estilo3}>
          
              <Routes>
                <Route exact path='/' element={<ItemListContainer />} />
                <Route exact path='/category/:id' element={<ItemListContainer />} />
                <Route exact path='/item/:id' element={<ItemListContainerDetail/>} />
                <Route exact path='/confirmacion' element={<SendOrder/>}/>
                <Route exact path='/cart' element={<Cart />} />
                
              </Routes>
          
          </Row>
          
          
        </Container>
      </CartProvider>
    </BrowserRouter>
  )
}

App.propTypes = {}

export default App
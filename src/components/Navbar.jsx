import React from 'react'
import { Col } from 'react-bootstrap';
import CartWidget from './CartWidget';

const Navbar = () => {
  const Titulo ={
    fontSize: '90px',
    paddingRight: "70px"
  }
  const divLogo ={
    paddingLeft: "50px"
  }
  return (

    <>
      <Col className='col-2'>
        <div style={divLogo}>
          <img
            src="../public/mm-removebg-preview.png"
            alt="Logo MoonShop"
            id="foto_logo"
            height="170rem"
            width="170rem" />
        </div>

      </Col>
      <Col className='col-8 text-center'>
        <p style={Titulo}>MoonShop</p>
      </Col>
      <Col className='col-2'>
        <CartWidget/>
      </Col>
        
    </>
  )
}

export default Navbar
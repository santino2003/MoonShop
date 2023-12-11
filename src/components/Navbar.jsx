import React from 'react'
import { Col ,Dropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const Titulo ={
    fontSize: '90px',
    paddingRight: "10px"
  }
  const divLogo ={
    paddingLeft: "50px"
  }
  const boton = {
    paddingLeft: '60rem'
  }


  return (

    <>
      <Col className='col-2'>
        <div style={divLogo}>
          <Link to="/">
            <img
              src="../mm-removebg-preview.png"
              alt="Logo MoonShop"
              id="foto_logo"
              height="170rem"
              width="170rem" />
          </Link>
        </div>

      </Col>
      <Col className='col-8 text-center'>
        <p style={Titulo}>MoonShop</p>
      </Col>
      <Col className='col-2'>
        <CartWidget/>
      </Col>
      <Dropdown style={boton}>
          <Dropdown.Toggle  variant="primary" id="dropdown-basic">
            Secciones
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link to="/category/pantalones" className="dropdown-item">Pantalones</Link>
            <Link to="/category/abrigo" className="dropdown-item">Abrigo</Link>
            <Link to="/category/blusas" className="dropdown-item">Blusas</Link>
          </Dropdown.Menu>
        </Dropdown>
        
    </>
  )
}

export default Navbar
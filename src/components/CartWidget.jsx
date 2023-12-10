import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/cartContex'



const CartWidget = () => {
  const { getTotalItems } = useCart();
  const icono ={
    paddingTop: "40px",
    
  }
  const numb ={
    paddingLeft: "30px",
    fontSize:"20px"
  }
  
  
  return (
    <div>
        <Link to = "/cart">
          <h5 style={icono}>
            <img src="/bag-heart.svg" alt=""
            height="45rem"
            width="45rem" />
          </h5>
          
        </Link>
        <h6 style={numb}>{getTotalItems()}</h6>
       
    </div>
  )
}

export default CartWidget
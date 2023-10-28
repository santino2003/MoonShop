import React from 'react'


const CartWidget = () => {
  const icono ={
    paddingTop: "40px",
    
  }
  const numb ={
    paddingLeft: "30px",
    fontSize:"20px"
  }

  return (
    <div>
        <h5 style={icono}>
          <img src="public\bag-heart.svg" alt=""
           height="45rem"
           width="45rem" />
        </h5>
        <h6 style={numb}>4</h6>
    </div>
  )
}

export default CartWidget
import React from 'react'
import { Col } from 'react-bootstrap'
import ItemDetail from './ItemDetail'

const ItmListDetail = ({producto}) => {
  
  return (
  
    <>
      
          
          <Col key={producto.id} sm={6} md={4} lg={3} style={{ marginLeft: '30px'}}>
            <ItemDetail key={producto.id} item={producto} />
          </Col>
          
      
    </>
  )
}

export default ItmListDetail
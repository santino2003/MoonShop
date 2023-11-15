import React from 'react'
import Item from './Item'
import { Col } from 'react-bootstrap'

const ItmList = ({productos}) => {
  return (
  
    <>
      {
        productos.map((item)=> (
          <Col key={item.id} sm={6} md={4} lg={3} style={{ marginLeft: '1px'}}>
            <Item key={item.id} item={item} />
          </Col>
          

        ))
      }
    </>
  )
}

export default ItmList
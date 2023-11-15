import React from 'react'
import { Col } from 'react-bootstrap'
import ItemDetail from './ItemDetail'

const ItmListDetail = ({productos}) => {
  return (
  
    <>
      {
        productos.map((item)=> (
          <Col key={item.id} sm={6} md={4} lg={3} style={{ marginLeft: '1px'}}>
            <ItemDetail key={item.id} item={item} />
          </Col>
          

        ))
      }
    </>
  )
}

export default ItmListDetail
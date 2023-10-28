import React from 'react'
import { Col } from 'react-bootstrap'

const ItemListContainer = ({greeting}) => {
  return (
    <Col className='text-center'>
      {greeting}
    </Col>
  )
}

export default ItemListContainer
import React, { useEffect, useState } from 'react'

import ItmListDetail from './ItmListDetail'


const ItemListContainerDetail = () => {
  const productos = [
    {id: '1',titulo:'remera estampada',descripcion: 'remera estampada roja',precio: 2000},
    {id: '2',titulo:'pantalon jean',descripcion: 'rotura EN LA RODILLA',precio: 15000},
    {id: '3',titulo:'gorro lana',descripcion: 'gorro negro de lana',precio: 3000},
    {id: '4',titulo:'gorro lana',descripcion: 'gorro negro de lana',precio: 3000},


  ]

  const obtenerProductos = new Promise((resolve,reject)=> {
    if (productos.length > 0 ){
      setTimeout(() => {
        resolve(productos)
      } )

    } else{
      reject('no se encontraron productos')
    }
  })  

  obtenerProductos  
    .then((resultado) => {
      console.log(resultado)
    })
    .catch((error) => {
      console.log(error)
    })
    
  
  return (
    
    <ItmListDetail productos={productos}/>
  )
}

export default ItemListContainerDetail
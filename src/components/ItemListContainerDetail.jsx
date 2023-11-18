import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItmListDetail from './ItmListDetail'


const ItemListContainerDetail = () => {
  const { id } = useParams();
  const productos = [
    {id: '1',titulo:'remera estampada',descripcion: 'remera estampada roja',precio: 2000,cargoria:'A'},
    {id: '2',titulo:'pantalon jean',descripcion: 'rotura en la rodilla',precio: 15000 ,cargoria:'B'},
    {id: '3',titulo:'remera azul',descripcion: 'remera color azul',precio: 4000 ,cargoria:'A'},
    {id: '4',titulo:'camisa a cuadros',descripcion: 'camisa talle S a cuadros',precio: 35000, cargoria:'C'},
    {id: '5',titulo:'gorro lana',descripcion: 'gorro negro de lana',precio: 22222 ,cargoria:'A'},
    {id: '6',titulo:'sombrero',descripcion: 'sombrero color verde',precio: 4454, cargoria:'C'},


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
 
  let prodcutosFiltrados = []
  
  
  if (id !== undefined){
    prodcutosFiltrados = productos.filter(objeto => objeto.id === id);
  }else{
    prodcutosFiltrados = productos
  }
    
  console.log(prodcutosFiltrados)
  return (
    
    <ItmListDetail productos={prodcutosFiltrados}/>
  )
}

export default ItemListContainerDetail
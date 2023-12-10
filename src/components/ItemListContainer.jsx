import React, { useEffect, useState } from 'react'

import ItmList from './ItmList'
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore} from "firebase/firestore"


const ItemListContainer = () => {
  const { id } = useParams();
  
  const [productos, setProductos] = useState([])
  useEffect(() =>{
    const db = getFirestore()
    const itemsCollection = collection(db,"jeanes")
    getDocs(itemsCollection).then((snapshot)=>{
      const docs = snapshot.docs.map((doc)=>{
        let documento = {
          ...doc.data(), id: doc.id
        }
        return documento
      })
      setProductos(docs)
    })
  })

 
  
  let prodcutosFiltrados = []
  
  
  
  if (id !== undefined){
    prodcutosFiltrados = productos.filter(objeto => objeto.categoria === id);
  }else{
    prodcutosFiltrados = productos
  }
    
  
  return (
    
    <ItmList productos={prodcutosFiltrados}/>
  )
}

export default ItemListContainer
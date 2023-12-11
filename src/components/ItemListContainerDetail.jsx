import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {doc, getDoc, getFirestore} from "firebase/firestore"
import ItmListDetail from './ItmListDetail'


const ItemListContainerDetail = () => {
  const { id } = useParams();


  const [producto ,setProducto] = useState([])
  useEffect(()=> {
    const db = getFirestore()
    const oneItem = doc(db, "ropa",id)
    console.log(oneItem)

    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const doc = snapshot.data()
        setProducto({ id: snapshot.id, ...snapshot.data() })
      
       
      }
    })
  },[id])
    
  
  return (
    <>
      
      <ItmListDetail producto={producto}/>
    </>
  )
}

export default ItemListContainerDetail
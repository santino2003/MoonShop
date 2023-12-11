import React from 'react'
import { useState } from 'react'
import { collection, getFirestore, addDoc } from 'firebase/firestore'
import {useCart} from '../context/cartContex'
import { Button, Row, } from 'react-bootstrap'

const SendOrder = () => {
    const { cart} = useCart();
    const db = getFirestore()
    const [id, setID] = useState('')
    const [nombre, setNombre] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit =(e)=> {
        e.preventDefault();
        addDoc(orderCollection,order).then(({id})=>
             setID(id))
        console.log('Entre')
    }


    const order ={
        nombre,
        email,
        cart

    }

    const orderCollection = collection(db, "ordenes")
  
    return (
    <div className='text-center'>
        <form action="" onSubmit={handleSubmit}>
            <Row   style={{ paddingTop: '10px',}}>
                <label>
                    <input type="text" placeholder='Nombre' onChange={(e)=>setNombre(e.target.value)} />
                </label>
            </Row>
            <Row style={{ paddingTop: '10px' }}>
                <label>
                    <input type="email" placeholder='Email'  onChange={(e)=>setEmail(e.target.value)} />
                </label>
            </Row>
            <Row style={{ paddingTop: '10px' }}>
                <label>
                    <Button type='submit'> Confirmar Compra</Button>
                </label>
            </Row>
            
           
            
            <p>Id de la compra: {id}</p>
        </form>
    </div>
  )
}

export default SendOrder
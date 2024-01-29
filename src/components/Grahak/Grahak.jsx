import React, { useRef } from 'react'
import pic from './person.jpg'
import './grahak.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import {Button, Form} from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

const Grahak = ({val:{name,number,account},fun,props}) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const paiseRef = useRef()

    const openModal = () => {
      setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
        
  
      }

    const handleClick = () =>{
        axios.delete(`http://localhost:9090/api/v1/account/${account.accId}`).then(()=>{
            props.history.replace('/')
        })
        fun();
        
    }
  
    const handleSubmit = (name) =>{
      //some code
    console.log(paiseRef.current.value)
    const obj = {
        "number":paiseRef.current.value
    }
    axios.post(`http://localhost:9090/api/v1/khata/${account.accId}`,obj)
    fun();
    }
  return (
    <div className='col'>
    <img src={pic} alt="" />

    <p>Name:{name}</p>
    <p>Number:{number}</p>
    <p>Balance:{account.sum}</p>
    <button className='btn btn-primary mb-4' onClick={openModal}>Add to Khata</button>
    <button className='btn btn-danger mb-4 ms-2' onClick={handleClick}>Delete</button>

    <Modal show={isOpen} onHide={closeModal}>
    <Modal.Header closeButton>
      <Modal.Title>Please add today's paise</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <input type="text" placeholder='Aaj ke Paise' ref={paiseRef}/>
            <Button onClick={handleSubmit}>Add</Button>
        </Form>
    </Modal.Body>

  </Modal>
    
    </div>
  )
}

export default Grahak
import React, { useRef, useState } from 'react'
import axios from 'axios'
import Modal from 'react-bootstrap/Modal'
import {Button, Form} from 'react-bootstrap'

const NewGrahak = (props) => {
const [isOpen, setIsOpen] = useState(props.match.params.id);

const naamRef = useRef();
const numRef = useRef();
const sumRef = useRef();

const closeModal = () =>{
    setIsOpen(false)
    props.history.replace("/")
}

const handleSubmit = () =>{

    const obj = {
        "name":naamRef.current.value,
        "number":numRef.current.value,
        "sum": sumRef.current.value
    }
    axios.post("http://localhost:9090/api/v1/grahak",obj)
    props.history.replace('/')
}

  return (
    <div>

<Modal show={isOpen} onHide={closeModal}>
    <Modal.Header closeButton>
      <Modal.Title>Please add new grahak</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <input type="text" placeholder='Naam' ref={naamRef}/>
            <input type="text" placeholder='Number' ref={numRef} />
            <input type="text" placeholder='Sum' ref={sumRef} />
            <Button onClick={handleSubmit}>Add</Button>
        </Form>
    </Modal.Body>

  </Modal>
    


    </div>
  )
}

export default NewGrahak
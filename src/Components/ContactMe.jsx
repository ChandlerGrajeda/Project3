import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';

export default function ContactMe({contactMe, setContactMe}) {
    const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userNumber: ""
    })

    function handleChange (event) {
        const {name, value} = event.target
        console.log (name,value)
        setFormData ({...formData, [name]:value})
     }

    function handleADDcontact () {
        setFormData ({...formData, id:10})
        const newContact = {...formData, id:uuidv4()}
        setContactMe ([...contactMe, newContact])
    }

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="contact Name"
                aria-label="contact Name"
                name="userName"
                onChange={(event)=>handleChange(event)} />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="contact Email"
                aria-label="contact Email"
                name="userEmail"
                onChange={(event)=>handleChange(event)} />
            </InputGroup>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="contact Number"
                aria-label="contact Number"
                name="userNumber"
                onChange={(event)=>handleChange(event)} />
            </InputGroup>
            <Button variant="secondary" onClick={handleADDcontact}>SUBMIT</Button>
        </>   
    )
}
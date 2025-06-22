import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';

export default function ContactMe({contactme}) {
    const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: ""
    })

    function handleChange (event) {
        const {name, value} = event.target
        console.log (name,value)
        setFormData ({...formData, [name]:value})
     }
    function handleADDcontact () {
        console.log (formData)
        setFormData ({...formData, id:10})
        const newContact = {...formData, id:uuidv4()}
        console.log (newContact)
        setContactMe ([...contactme, newContact])
    }

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="contact Title"
                aria-label="contact Title"
                name="text"
                onChange={(event)=>handleChange(event)} />
            </InputGroup>
            <Button variant="secondary" onClick={handleADDcontact}>SUBMIT</Button>
        </>   
    )
}
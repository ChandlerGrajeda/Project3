import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';


export default function AddingTodos({todos, setTodos}) {
    const [formData, setFormData] = useState({
    id: "",
    text: "",
    completed: "Not Completed"
    })

    function handleChange (event) {
        const {name, value} = event.target
        console.log (name,value)
        setFormData ({...formData, [name]:value})
     }
    function handleADDtodos () {
        console.log (formData)
        setFormData ({...formData, id:10})
        const newTodo = {...formData, id:uuidv4()}
        console.log (newTodo)
        setTodos ([...todos, newTodo])
     }

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="todo Title"
                aria-label="Book Title"
                name="text"
                onChange={(event)=>handleChange(event)} />
            </InputGroup>
            <Button variant="secondary" onClick={handleADDtodos}>ADD TODO</Button>
        </>   
    )
}

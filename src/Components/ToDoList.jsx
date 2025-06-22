import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


export default function ToDoList({todos,setTodos}) {

  function handleDelete (event, todosID) {
    console.log (event)
    console.log (todosID)
    const result = todos.filter(todos=>todos.id!==todosID)
    setTodos (result)
  }

  function handleUpdate (event, TodosID) {
    const updatedTodos = todos.map(todo => {                        
      console.log ("The id of the Todos: ", todo.id)
      console.log ("The ID of row that need to be changed", TodosID)
      if (todo.id === TodosID) {                                     
        return {                                                   
          ...todo,
          completed: 'Completed'
        };
      }
      return todo;                                                 
    });
    setTodos(updatedTodos);
  }


  return (
    <>
    <Table responsive>
      <thead>
        <tr>
          <th>No.</th>
          <th>To Do List</th>
          <th>Status</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
         {todos.map((todo,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{todo.text}</td>
              <td>{todo.completed}</td>
              <td><Button variant="danger" name="btnDelete" onClick={(event)=>handleDelete(event,todo.id)}>Delete</Button></td>
              <td><Button variant="success" name="btnUpdate" onClick={(event)=>handleUpdate(event,todo.id)}>Update</Button></td>             
            </tr>
         ))}
      </tbody>
    </Table>
    </>
  )
  
}

  
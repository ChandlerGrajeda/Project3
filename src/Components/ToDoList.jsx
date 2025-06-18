import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function ToDoList({todos,SetTodos}) {
    function handleDelete (event, todosID) {
    console.log (event)
    console.log (todosID)
    const result = todos.filter(todos=>todos.id!==todosID)
    setTodos (result)
  }
}

  function handleUpdate (event, TodosID) {
    const updatedTodos = todos.map(todos => {                        
      console.log ("The id of the Todos: ", todos.id)
      console.log ("The ID of row that need to be changed", TodosID)
      if (todos.id === TodosID) {                                     
        return {                                                   
          ...todos,
          status: 'read'
        };
      }
      return todos;                                                 
    });
    setTodos(updatedTodos);
  }

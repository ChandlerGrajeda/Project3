import React, {useState} from 'react';
import ToDoList from '../Components/ToDoList';
import AddingTodos from '../Components/AddingTodos'


export default function ToDoPage() {
    const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: 'Not Completed' },
    { id: 2, text: 'Build a Todo App', completed: 'Not Completed' },
    { id: 3, text: 'Submit Assignment', completed: 'Not Completed' }
  ]);
  return (
    
    <>
    <ToDoList todos={todos} setTodos={setTodos}/>
    <AddingTodos todos={todos} setTodos={setTodos}/>
    </>
    

  )
}

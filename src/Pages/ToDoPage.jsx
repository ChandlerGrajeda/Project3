import React, {useState} from 'react';
import ToDoList from '../Components/ToDoList';


export default function ToDoPage() {
    const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: 'Completed' },
    { id: 2, text: 'Build a Todo App', completed: 'Completed' },
    { id: 3, text: 'Submit Assignment', completed: 'Completed' }
  ]);
  return (
    <ToDoList todos={todos} setTodos={setTodos}/>

  )
}

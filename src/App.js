import logo from './logo.svg';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: 'Completed' },
    { id: 2, text: 'Build a Todo App', completed: 'Completed' },
    { id: 3, text: 'Submit Assignment', completed: 'Completed' }
  ]);
  return (
    <h1>To Do Application</h1>
  );
}

export default App;

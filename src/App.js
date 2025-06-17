import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage'
import ContactMePage from './Pages/ContactMePage';
import ToDoPage from './Pages/ToDoPage';
import Header from './Components/Header';

function App() {

  return (
      <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/todo" element={<ToDoPage />} />
          <Route path="/contactme" element={<ContactMePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

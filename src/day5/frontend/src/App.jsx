import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { createContext } from "react";
import './App.css'
import Home from './pages/Home'
import Todo from './pages/Todo'
import About from './pages/About'
import { ApiProvider } from './context/ApiContext'

const ThemeContext = createContext();

function App() {
  return (
    <ApiProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/todo">Todo</Link> |{" "}
          <Link to="/About">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  )
}
export default App

createRoot(document.getElementById('root')).render(
  <App />
);

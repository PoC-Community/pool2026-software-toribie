import { useState } from 'react'
import './App.css'
import FetchDog from './Fetch';
function MyHeader() {
    return (
        <header>
            <h1>∠( ᐛ 」∠)_</h1>
        </header>
    );
}

function CountState(props) {
    return (
      <h4>
        You have eaten {props.foodcount} {props.food} today! You must be quite hungry are ya? (¯▿¯)
      </h4>
    );
}

function MyCard(props) {
  return (
    <div className="MyCard">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

function CountButton(props) {
  return (
  <button onClick={props.onClick}>
    {props.description}
  </button>
  );
}

function MyForm() {
  const [name, setName] = useState("");

  return (
    <div>
      <form>
        <label>Enter something:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
      <p>Current input: {name}</p>
      <div className="formData">
        <p>Character count: {name.length}</p>
        <button onClick={() => setName("")}>
          Reset
        </button>
      </div>
    </div>
  )
}

function TodoItem(props)
{
    const [completed, setComplete] = useState(false);
    const handleCheckedClick = () => setComplete(!completed)
    const id = props.count + 1;
    const text = props.text;

    return (
      <div className="tasklist">
        <input onClick={handleCheckedClick} checked={completed} type="checkbox"/>
        <p>{id}. {text}</p>
        <button onClick={() => props.onDelete(props.id)}>Delete</button>
      </div>
    );
}

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const API_URL = import.meta.env.VITE_API_URL;

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      const newTodo = { id: Date.now(), text: input };

      // Add to local state immediately
      setTodos([...todos, newTodo]);
      setInput("");

      // Try to sync with backend if available
      if (API_URL) {
        try {
          await fetch(`${API_URL}/api/tasks`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: input })
          });
        } catch {
          console.log('Backend not available, using local state only');
        }
      }
    }
  };

  const handleDeleteTodo = async (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    if (API_URL) {
      try {
        await fetch(`${API_URL}/api/tasks/${id}`, {
          method: 'DELETE'
        });
      } catch {
        console.log('Backend not available, using local state only');
      }
    }
  };

  return (
    <div>
      <h3>Todo List</h3>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            count={index}
            text={todo.text}
            onDelete={handleDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  function handleClick(increment) {
    if (increment == 0) {
      setCount(0);
    } else {
      setCount(count + increment);
    }
  }

  return (
    <>
    <MyHeader />
    <div>
      <FetchDog />
      <h2>〜〜(／￣▽)/ 〜ф</h2>
    </div>
      <div className="card">
        <br></br>
        <br></br>
        <CountState food="carrots" foodcount={count}/>
        <div className="countbuttons">
        <CountButton description="Click to eat!" onClick={() => handleClick(1)}/>
        <CountButton description="Click to clinically replace your stomach by a clean one via surgery!" onClick={() => handleClick(0)}/>
        <CountButton description="Click to digest!" onClick={() => handleClick(-1)}/>
        </div>
        <MyCard title="Example Card" description="Hello World"/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <MyForm/>
      <TodoList/>
      <footer>
        <p className="read-the-docs">
          <a href="https://vite.dev" target="_blank">Vite</a> & <a href="https://react.dev" target="_blank">React</a> docs.
        </p>
      </footer>
    </>
  )
}
export default App

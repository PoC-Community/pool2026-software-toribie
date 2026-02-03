import { useState } from 'react'
import './App.css'

function MyHeader() {
    return (
        <header>
            <h1>This is a header!</h1>
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
    <form>
      <label>Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <p>Current value: {name}</p>
    </form>
  )
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
      <h2>Welcome to my app</h2>
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
      <footer>
        <p className="read-the-docs">
          <a href="https://vite.dev" target="_blank">Vite</a> & <a href="https://react.dev" target="_blank">React</a> docs.
        </p>
      </footer>
    </>
  )
}
export default App

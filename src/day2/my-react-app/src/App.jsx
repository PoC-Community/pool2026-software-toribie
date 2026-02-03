import { useState } from 'react'
import './App.css'

function MyHeader() {
    return (
        <header>
            <h1>This is a header!</h1>
        </header>
    );
}

function MyButton(props) {
  return (
    <button>
      You have eaten {props.foodcount} {props.food} today!
    </button>
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MyHeader />
    <div>
      <h2>Welcome to my app</h2>
      <MyButton food="carrots" foodcount = {count} onClick={() => setCount((count) => count + 1)}/>
    </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          click to eat
        </button>
        <br></br>
        <br></br>
        <MyCard title="Example Card" description="Hello World"/>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <a href="https://vite.dev" target="_blank">Vite</a> & <a href="https://react.dev" target="_blank">React</a> docs.
      </p>
    </>
  )
}
export default App

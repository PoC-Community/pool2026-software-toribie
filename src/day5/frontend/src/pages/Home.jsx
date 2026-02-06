import { useState } from 'react'
import FetchDog from '../Fetch';

function MyHeader() {
    return (
        <header>
            <h1>∠( ᐛ 」∠)_</h1>
        </header>
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

function CountState(props) {
    return (
      <h4>
        You have eaten {props.foodcount} {props.food} today! You must be quite hungry are ya? (¯▿¯)
      </h4>
    );
}

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick(increment) {
    if (increment == 0) {
      setCount(0);
    } else {
      setCount(count + increment);
    }
  }
  return (
    <div>
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
          <MyCard title="What is this page?" description="It's the home page you silly!"/>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
    </div>
  );
}
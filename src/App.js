import React, { useState, useCallback, useEffect } from "react";
import "./styles.css";

const functionsCounter = new Set();

export default function App() {
  const [counter, setCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  // const increment = () => {
  //   setCounter(counter + 1);
  // }
  // const decrement = () => {
  //   setCounter(counter - 1);
  // }
  // const incrementOtherCounter = () => {
  //   setOtherCounter(otherCounter + 1);
  // };

  const increment = useCallback(() => {
    console.log("increment");
    setCounter(counter + 1);
  }, [counter]);

  const decrement = useCallback(() => {
    console.log("decrement");
    setCounter(counter + 1);
  }, [counter]);

  const incrementOtherCounter = useCallback(() => {
    console.log("incrementOtherCounter");
    setOtherCounter(otherCounter + 1);
  }, [otherCounter]);

  useEffect(() => {
    functionsCounter.add(increment);
    functionsCounter.add(decrement);
    functionsCounter.add(incrementOtherCounter);
    console.log(functionsCounter.size);
  }, [increment, decrement, incrementOtherCounter]);

  return (
    <div className="App">
      <h1>
        <code>useCallback()</code>
      </h1>
      <h3>{`function call: ${functionsCounter.size}`}</h3>
      <button onClick={decrement}>Decrement</button>
      {` ${counter} `}
      <button onClick={increment}>Increment</button>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>
    </div>
  );
}

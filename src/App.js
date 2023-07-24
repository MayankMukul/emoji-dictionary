import "./styles.css";
import { useState } from "react";

export default function App() {
  var [likeCounter, newCounter] = useState(0);

  function updateCounter() {
    newCounter(likeCounter + 1);
  }

  function display() {
    updateCounter();
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>hello </h2>
      <button onClick={display}>click me</button> {likeCounter}
    </div>
  );
}

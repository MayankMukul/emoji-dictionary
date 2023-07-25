import "./styles.css";
import { useState } from "react";

export default function App() {
  var [likeCounter, newCounter] = useState(0);
  var [oldchange, newchange] = useState("");

  function updateCounter() {
    newCounter(likeCounter + 1);
  }

  function display() {
    updateCounter();
  }

  function changeinput(event) {
    newchange(event.target.value);
    console.log({ oldchange });
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>hello </h2>
      <button onClick={display}>click me</button> {likeCounter}
      <input onChange={changeinput} />
      <p>{oldchange}</p>
    </div>
  );
}

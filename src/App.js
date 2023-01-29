import "./styles.css";
import React, { useState } from "react";

function App() {
  return (
    <>
      <h1>Higher Order Component</h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </>
  );
}
function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "red", width: 100, textAlign: "center" }}>
      <props.cmp />
    </h2>
  );
}
function HOCGreen(props) {
  return (
    <h2 style={{ backgroundColor: "green", width: 100, textAlign: "center" }}>
      <props.cmp />
    </h2>
  );
}
function HOCBlue(props) {
  return (
    <h2 style={{ backgroundColor: "blue", width: 100, textAlign: "center" }}>
      <props.cmp />
    </h2>
  );
}

function Counter() {
  const [Count, setCount] = useState(0);
  return (
    <>
      <h1>{Count}</h1>
      <button onClick={() => setCount(Count + 1)}>Update</button>
    </>
  );
}
export default App;

import React, { useState } from "react";
import Child from "./Child";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState(0);
  const [inputVal, setInputVal] = useState("");
  const [arr, setArr] = useState([]);
  const handleValue = (e) => {
    setInputVal(e.target.value);
  };
  const handleClick = () => {
    setArr([...arr, inputVal]);
    setInputVal("");
  };
  const handleRemove = (index) => {
    arr.splice(index, 1);
    setArr([...arr]);
  };
  return (
    <div className="App">
      <h1>Hello Coders</h1>
      <h2>This is my first basic react challenge</h2>
      <div>
        <input value={inputVal} onChange={handleValue} />{" "}
        <button onClick={handleClick}>enter</button>
        {arr.length > 0 &&
          arr.map((item, index) => {
            return (
              <ul>
                <li value={index}>
                  {item}{" "}
                  <button value={item} onClick={() => handleRemove(index)}>
                    Remove
                  </button>
                </li>
              </ul>
            );
          })}
      </div>
      {val}
      <br></br>
      <Child val={val} setVal={setVal}></Child>
    </div>
  );
}

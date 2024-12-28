import React, { useState, useMemo } from "react";

const UsememoHook = (props) => {
  const [number, setNumber] = useState(0);
  const squaredNum = useMemo(() => squareNum(number), [number]);
  // const squaredNum = squareNum(number);
  const [counter, setCounter] = useState(0);

  // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      <h1>Welcome to Geeksforgeeks</h1>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={onChangeHandler}
      ></input>

      <div>OUTPUT: {squaredNum}</div>
      <button onClick={counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
    </div>
  );
};

// Function to square the value
function squareNum(number) {
  console.log("Squaring will be done!");
  return Math.pow(number, 2);
}

export default UsememoHook;
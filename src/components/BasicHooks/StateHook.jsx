import React, { useState, useEffect } from "react";

const StateHook = () => {
  const [count, setCount] = useState(0); // counter state
  const [name, setName] = useState(""); // name state when input changes
  const [display, setDisplay] = useState(""); // display state when button clicked
  const [show, setShow] = useState(false); // show state when button clicked

  useEffect(() => {
    setDisplay(name); //this will call when Show changed filed button is clicked
  }, [show]);

  return (
    <div>
      <div>
        counters: {count}
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <div>
        name: {name}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          {display && <h1>Hello {display}</h1>}
          <button onClick={() => setShow(!show)}>Show changed filed</button>
        </div>
      </div>
    </div>
  );
};

export default StateHook;

import React, { useRef, useState, useEffect } from "react";

const RefHook = () => {
  // Ref for the render previous count
  const prevCount = useRef(0);
  const [count, setCount] = useState(0);
  const inputElement = useRef(null);
  useEffect(() => {
    // This runs every time AFTER Counter is rendered.
    prevCount.current = count;
  });

  // Ref for the timer
  const [milliSeconds, setMilliSeconds] = useState(0);
  const [ticking, setTicking] = useState(false);
  // 1. Get the ref for the CURRENT INSTANCE of the component
  const interval = useRef();
  useEffect(() => {
    if (ticking) {
      // 2. Update the value via ".current"
      interval.current = setInterval(() => {
        setMilliSeconds((ms) => ms + 1);
      }, 1);
      return () => clearInterval(interval.current);
    } else {
      // 3. Access the value via ".current"
      interval.current && clearInterval(interval.current);
    }
  }, [ticking]);

  return (
    <>
      <div>
        <h1>Ref Hook</h1>
        <h1>
          previous Count with ref: {prevCount.current} and Cuurent count with
          state: {count}
        </h1>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <div>
            <h1>Focus Input</h1>
          <input type="text" ref={inputElement} />
          <button onClick={() => inputElement.current.focus()}>
            Focus Input
          </button>
        </div>
      </div>
      <div>
        <h1>Timer</h1>
        <h1>{milliSeconds}</h1>
        <button onClick={() => setTicking((c) => !c)}>
          {milliSeconds === 0 ? "Start" : ticking ? "Pause" : "Resume"}
        </button>
      </div>
    </>
  );
};

export default RefHook;

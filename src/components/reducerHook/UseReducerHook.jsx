import React, { useReducer, useState } from "react";

const initialState = {
  count: 0,
  name: "",
  age: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "setName":
      return { ...state, name: action.payload };
    case "setAge":
      return { ...state, age: action.payload };
    default:
      return state;
  }
}

const UseReducerHook = () => {
  return (
    <div>
      <Reducer />
    </div>
  );
};

export default UseReducerHook;

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [display, setDisplay] = useState({});

  return (
    <div>
      <div>
        counters: {state.count}
        <button onClick={() => dispatch({ type: "increment" })}>
          Increment
        </button>
        <button
          disabled={state.count < 1}
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div>
        name: {state.name}
        <input
          type="text"
          value={state.name}
          onChange={(e) =>
            dispatch({ type: "setName", payload: e.target.value })
          }
        />
        <div>
          age: {state.age}
          <input
            type="number"
            value={state.age}
            onChange={(e) =>
              dispatch({ type: "setAge", payload: e.target.value })
            }
          />
        </div>
        <div>
          <button onClick={() => setDisplay(state)}>Display</button>
        </div>
        {Object.keys(display).length !== 0 && <h1>Hi {display.name} your age is {display.age}. And you current count is {display.count}</h1>}
      </div>
    </div>
  );
}

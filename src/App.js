import React from "react";
// import ExampleComponent from "./components/ExampleComponent";
import StateHook from "./components/BasicHooks/StateHook";
import UnmountHook from "./components/BasicHooks/UnmountHook";
import RefHook from "./components/BasicHooks/RefHook";

function App() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      {/* <ExampleComponent name="Ansari" />*/}
      <StateHook /> {/* Basic Hooks */}
      <UnmountHook /> {/* unmount Hooks */}
      <RefHook /> {/* Ref Hooks */}
    </div>
  );
}

export default App;

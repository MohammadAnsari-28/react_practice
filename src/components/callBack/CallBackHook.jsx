import React, { useState } from "react";
import ProductPage from "./ProductPage";

const CallBackHook = (props) => {
  const [isDark, setIsDark] = useState(false);

  console.log("CallBackHook");
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Dark mode
      </label>
      <ProductPage theme={isDark ? 'dark' : 'light'} />
    </div>
  );
};

export default CallBackHook;

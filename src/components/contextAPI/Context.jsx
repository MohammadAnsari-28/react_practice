import React, { createContext, useState } from "react";
import Panel from "./Panel";
import PanelConsumer from "./PanelConsumer";

export const ThemeContext = createContext(null);
export const ColorContrext = createContext(null);
const Context = () => {
  const [isDark, setIsDark] = useState(false);

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
      <ThemeContext.Provider value={isDark ? "dark" : "light"}>
        <h1>use Context Hook</h1>
        <ColorContrext.Provider value={isDark? { color: "green", fontSize: "20px" }: { color: "red", fontSize: "30px" }}>
          <Panel />
          <h1>Context API consumer example</h1>
          <PanelConsumer />
        </ColorContrext.Provider>
      </ThemeContext.Provider>
    </div>
  );
};

export default Context;

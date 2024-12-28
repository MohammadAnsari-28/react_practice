import React, { useContext } from "react";
import { ThemeContext, ColorContrext } from "./Context";

const Button = () => {
  const theme = useContext(ThemeContext);
  const { fontSize, color } = useContext(ColorContrext);
  return (
    <div>
      <button
        style={{
          backgroundColor: theme === "dark" ? "black" : "white",
          color: color,
          fontSize: fontSize,
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Button;

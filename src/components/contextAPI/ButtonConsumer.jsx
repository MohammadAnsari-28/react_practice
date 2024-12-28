import React from "react";
import { ColorContrext, ThemeContext } from "./Context";

const ButtonConsumer = (props) => {
  return (
    <ThemeContext.Consumer>
      {(bg) => (
        <ColorContrext.Consumer>
          {(value) => (
            <div>
              <button
                style={{
                  backgroundColor: bg === "dark" ? "black" : "white",
                  color: value.color,
                  fontSize: value.fontSize,
                }}
              >
                Click me
              </button>
            </div>
          )}
        </ColorContrext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
};

export default ButtonConsumer;

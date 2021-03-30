import React from "react";
import { ThemeContext } from "../Context/theme-contextV2";

function ThemeToggleButton(props) {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        console.log(toggleTheme);
        return (
          <button
            {...props}
            onClick={toggleTheme}
            style={{
              backgroundColor: theme.background,
              color: theme.color,
            }}
          ></button>
        );
      }}
    </ThemeContext.Consumer>
  );
}

export default ThemeToggleButton;

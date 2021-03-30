import React, { useContext } from "react";
import { ThemeContext } from "../Context/theme-context";

function ThemeButton(props) {
  const currentContext = useContext(ThemeContext);

  console.log(props);

  return (
    <button
      {...props}
      style={{
        backgroundColor: currentContext.background,
        color: currentContext.color,
      }}
    ></button>
  );
}

export default ThemeButton;

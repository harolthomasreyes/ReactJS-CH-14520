import React, { useState, useEffect } from "react";
import "./style.css";

export default function App() {
  const [isLoad, setIsLoad] = useState(true);
  const [colorStyle, setColorStyle] = useState("red");

  useEffect(() => {
    setTimeout(() => {
      setColorStyle("yellow");
    }, 1500);

    setTimeout(() => {
      setColorStyle("green");
    }, 2500);

    setTimeout(() => {
      setIsLoad(false);
    }, 5000);
  }, []);

  return (
    <div>
      {isLoad ? (
        <p
          style={{
            color: colorStyle
          }}
        >
          cargando...
        </p>
      ) : (
        <div>
          {" "}
          <h1>Hello StackBlitz!</h1>
          <p>Start editing to see some magic happen :)</p>
        </div>
      )}
    </div>
  );
}

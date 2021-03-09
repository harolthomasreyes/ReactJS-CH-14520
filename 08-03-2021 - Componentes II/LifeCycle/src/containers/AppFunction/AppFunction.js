import { useState, useEffect } from "react";
import classes from "./AppFunction.css";
const AppFunction = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("Maria");

  useEffect(() => {
    console.log("[AppFunction.js] useEffect");
    // Http request...
    setTimeout(() => {
      console.log("Saved data to cloud!");
    }, 1000);
    return () => {
      console.log("[AppFunction.js] cleanup work in useEffect");
    };
  }, [counter]);

  useEffect(() => {
    //componentDidMount
    console.log("[AppFunction.js] 2nd useEffect");
    return () => {
      //componentWillUnmount
      console.log("[AppFunction.js] cleanup work in 2nd useEffect");
    };
  });

  return (
    <div className={classes.AppFunction}>
      counter:{counter}
      <br />
      name:{name}
      <br />
      <button onClick={() => setCounter((counter) => counter + 1)}>
        Count
      </button>
      <button onClick={() => setName((counter) => "Pepa")}>ReName</button>
    </div>
  );
};

export default AppFunction;

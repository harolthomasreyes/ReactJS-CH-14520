import React, { Fragment } from "react";
import ThemeButton from "./ThemeButton";

function Toolbar(props) {
  return (
    <Fragment>
      Este es el Toolbar
      <br />
      <ThemeButton onClick={props.changeTheme}>Click toolbar.js</ThemeButton>
    </Fragment>
  );
}

export default Toolbar;

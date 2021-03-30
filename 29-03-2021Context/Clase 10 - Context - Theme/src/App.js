import React, { Fragment, useState } from "react";
import ThemeButton from "./Components/ThemeButton";
import Toolbar from "./Components/Toolbar";
import ThemeToggleButton from "./Components/ThemeToggleButton";
import { ThemeContext, themes } from "./Context/theme-contextV2";

class App extends React.Component {
  constructor() {
    super();

    this.toggleTheme = () => {
      console.log("hiciste click");
      this.setState((state) => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };

    this.state = {
      theme: themes.light, // valor por defecto
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    return (
      <Fragment>
        <ThemeContext.Provider value={this.state}>
          {/* <Toolbar
          changeTheme={() =>
            setTheme(theme === themes.dark ? themes.light : themes.dark)
          }
        />
        <br /> */}
          <p>hola mundo</p>
          <ThemeToggleButton>click me pls</ThemeToggleButton>
        </ThemeContext.Provider>
        {/* <br />
      <ThemeButton>Click app.js</ThemeButton> */}
      </Fragment>
    );
  }
}

export default App;

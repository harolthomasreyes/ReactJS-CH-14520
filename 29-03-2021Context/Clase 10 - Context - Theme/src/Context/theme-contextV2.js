import React from "react";

export const themes = {
  light: {
    color: "#000000",
    background: "#eeeeee",
  },
  dark: {
    color: "#ffffff",
    background: "#222222",
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark, // valor por defecto
  toggleTheme: () => {},
});

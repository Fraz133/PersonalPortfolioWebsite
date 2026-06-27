import React, { useState } from "react";
import "./styles/App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme, materialDarkTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" ? materialDarkTheme : chosenTheme;
  });

  const toggleTheme = () => {
    setCurrentTheme((prev) => {
      const next = prev === chosenTheme ? materialDarkTheme : chosenTheme;
      localStorage.setItem(
        "theme",
        next === materialDarkTheme ? "dark" : "light"
      );
      return next;
    });
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={currentTheme} onToggle={toggleTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;

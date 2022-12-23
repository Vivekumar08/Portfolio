import { createContext, useEffect, useState } from "react";

export const themes = {
  dark: "",
  light: "white-content",
};

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.dark);

  useEffect(() => {
    switch (theme) {
      case themes.light:
        document.body.classList.add("white-content");
        document.documentElement.setAttribute('data-theme', theme);
        break;
      case themes.dark:
      default:
        document.body.classList.remove("white-content");
        document.documentElement.setAttribute('data-theme', theme);
        break;
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;

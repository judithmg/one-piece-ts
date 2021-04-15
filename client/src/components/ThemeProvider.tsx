import React, { useState, createContext } from "react";

type Theme = "dark" | "light";
type ThemeContextT = { theme: Theme; toggleTheme: () => void };

export const ThemeContext = createContext<ThemeContextT>({} as ThemeContextT);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const color = theme === "dark" ? "#333" : "#FFF";
  const backgroundColor = theme === "dark" ? "#FFF" : "#333";

  document.body.style.color = color;
  document.body.style.backgroundColor = backgroundColor;

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

import React, { useContext } from "react";
import Toggle from "react-toggle";
import { ThemeContext } from "./ThemeProvider";
import "../styles/Toggle.scss";

export default function Togggle() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Toggle
      defaultChecked={false}
      icons={{
        unchecked: <span>🌞</span>,
        checked: <span>🌚</span>,
      }}
      onChange={() => toggleTheme()}
    />
  );
}

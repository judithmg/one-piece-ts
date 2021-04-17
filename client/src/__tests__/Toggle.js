import React from "react";
import "@testing-library/jest-dom/extend-expect";

import { fireEvent, render, screen } from "@testing-library/react";
import  Toggle  from "../components/Toggle";

describe("Given a Toggle", () => {
  describe("When it is invoked", () => {
    test("should render a switch that has an input", () => {
        render(
            <Toggle/>
            );
      const input = screen.getByText("🌞");
      fireEvent.click(input)
    });
  });
});

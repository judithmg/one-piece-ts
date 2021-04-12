import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";

import CharacterHeader from "../pages/CharacterList/CharacterHeader";

describe("Given a CharacterHeader component", () => {
  describe("When it is invoked", () => {
    test("Then there should be a div with text ID", () => {
      render(<CharacterHeader />);

      const div = screen.getByText("ID");
      expect(div).toBeInTheDocument();
    });
    test("Then there should be a scrollable event", async () => {
      const fn = jest
        .spyOn(window, "removeEventListener")
        .mockImplementation(() => {});
      render(<CharacterHeader />);
      await fireEvent.scroll(window, { target: { scrollY: 101 } });
      expect(fn).toHaveBeenCalled();
    });
  });
});

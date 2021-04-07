import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import CharacterHeader from "../pages/CharacterList/CharacterHeader";

describe("Given a CharacterHeader component", () => {
  let container = null;
  let unit = {
    stars: 5,
  };
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe("When it is invoked", () => {
    test("Then there should be a header with class charlist__header", () => {
      act(() => {
        render(
          <BrowserRouter>
            <CharacterHeader />
          </BrowserRouter>,
          container
        );
      });

      const div = document.querySelector(".charlist__header");
      expect(div).toBeTruthy();
    });
  });
});

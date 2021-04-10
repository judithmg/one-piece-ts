import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import StarRatings from "../pages/shared/StarRatings";

describe("Given a StarRatings component", () => {
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
    test("Then there should be a svg", () => {
      act(() => {
        render(
          <BrowserRouter>
            <StarRatings stars={unit.stars} />
          </BrowserRouter>,
          container
        );
      });

      const svg = document.querySelectorAll("svg");
      expect(svg.length).toBe(7);
    });
  });
  describe("When stars has a + sign", () => {
    test("Then there should be a span with a +", () => {
      unit.stars = "4+";
      act(() => {
        render(
          <BrowserRouter>
            <StarRatings stars={unit.stars} />
          </BrowserRouter>,
          container
        );
      });

      const { innerHTML } = document.querySelector("span");
      expect(innerHTML).toBe("+");
    });
  });
});

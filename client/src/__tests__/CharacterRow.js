import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import Character from "../pages/CharacterList/CharacterRow";

describe("Given a CharacterRow component", () => {
  let container = null;
  let unit = {
    name: "Makino, Proprietor of a Relaxed Tavern",
    type: "PSY",
    class: ["Cerebral", "Fighter"],
    stars: 5,
    cost: 1,
    combo: 5,
    sockets: 4,
    maxLvl: 99,
    expToMax: 4000000,
    lvl1HP: 563,
    lvl1ATK: 644,
    lvl1RCV: 160,
    maxHP: 1645,
    maxATK: 1011,
    maxRCV: 468,
    growthRate: 1,
    id: 3383,
    alias: null,
    family: "Makino",
    cooldown: [13, 13],
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
    test("Then there should be a div", () => {
      act(() => {
        render(
          <BrowserRouter>
            <Character unit={unit} />
          </BrowserRouter>,
          container
        );
      });

      const div = document.querySelector("div");
      expect(div).toBeTruthy();
    });
    test('Then there should be a div with a text maxHP "1645"', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Character unit={unit} />
          </BrowserRouter>,
          container
        );
      });
      const { innerHTML } = document.querySelector(".unit-maxHP");
      expect(innerHTML).toBe("1645");
    });
  });
  describe("When unit.type is an array", () => {
    test("Then the unit.type[0] is used to style the unit.name", () => {
      unit.type = ["STR", "DEX"];
      act(() => {
        render(
          <BrowserRouter>
            <Character unit={unit} />
          </BrowserRouter>,
          container
        );
      });

      const char = document.querySelector(".STRcolor");
      expect(char).toBeTruthy();
    });
    test("Then its name is shown", () => {
      act(() => {
        render(
          <BrowserRouter>
            <Character unit={unit} />
          </BrowserRouter>,
          container
        );
      });

      const { innerHTML } = document.querySelector(".STRcolor");
      expect(innerHTML).toBe("Makino, Proprietor of a Relaxed Tavern");
    });
  });
  describe("When unit.class is not an array", () => {
    test("Then the class is shown", () => {
      unit.class = "Cerebral";
      act(() => {
        render(
          <BrowserRouter>
            <Character unit={unit} />
          </BrowserRouter>,
          container
        );
      });

      const { innerHTML } = document.querySelector(".unit-class");
      expect(innerHTML).toBe(unit.class);
    });
  });
  describe("When it is a dual unit", () => {
    test("Then there are three imgs", () => {
      unit.class = [["cerebral", "slasher"], [], []];
      act(() => {
        render(
          <BrowserRouter>
            <Character unit={unit} />
          </BrowserRouter>,
          container
        );
      });

      const imgs = document.querySelectorAll("img");
      expect(imgs.length).toBe(3);
    });
  });
  describe("When it is a evolver", () => {
    test("Then there are two imgs", () => {
      unit.class = "Booster";
      act(() => {
        render(
          <BrowserRouter>
            <Character unit={unit} />
          </BrowserRouter>,
          container
        );
      });

      const imgs = document.querySelectorAll("img");
      expect(imgs.length).toBe(2);
    });
  });
});

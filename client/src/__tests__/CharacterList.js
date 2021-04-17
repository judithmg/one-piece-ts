import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import {
  CharacterList,
  mapStateToProps,
  mapDispatchToProps,
} from "../pages/CharacterList";

describe("Given a CharacterList component", () => {
  let container;

  let actions = { areCharactersLoading: jest.fn(), loadCharsShown: jest.fn() };
  let character = {
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
  let charsShown = [character, character];
  let charactersFiltered = [character, character];
  let filters = [];
  beforeEach(() => {
    window.scrollTo = jest.fn();
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  test("There should be a div", () => {
    act(() => {
      render(
        <BrowserRouter>
          <CharacterList
            actions={actions}
            loadingCharacters={false}
            charsShown={charsShown}
            charactersFiltered={charactersFiltered}
            filter={filters}
          ></CharacterList>
        </BrowserRouter>,
        container
      );
    });
    const article = document.querySelector("article");
    expect(article).toBeTruthy();
  });
  test("There should be a spinner if the are no characters", () => {
    act(() => {
      render(
        <BrowserRouter>
          <CharacterList
            actions={actions}
            loadingCharacters={true}
            charsShown={charsShown}
            charactersFiltered={charactersFiltered}
            filter={filters}
          ></CharacterList>
        </BrowserRouter>,
        container
      );
    });
    const article = document.querySelector("article");
    expect(article).toBeTruthy();
  });
});

describe("Given a mapStateToProps", () => {
  test("it should return a state", () => {
    const state = {
      charactersReducer: {
        loadingCharacters: false,
        filters: [],
        charsShown: [],
        charactersFiltered: [],
      },
    };
    const result = mapStateToProps(state);
    expect(result).toEqual({
      loadingCharacters: state.charactersReducer.loadingCharacters,
      filters: state.charactersReducer.filters,
      charsShown: state.charactersReducer.charsShown,
      charactersFiltered: state.charactersReducer.charactersFiltered,
    });
  });
});
describe("Given a mapDispatchToProps", () => {
  test("it should return an object", () => {
    const dispatch = jest.fn();
    const result = mapDispatchToProps(dispatch);
    expect(result.actions.areCharactersLoading).toBeTruthy();
  });
});

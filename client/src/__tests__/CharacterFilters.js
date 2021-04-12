import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { Stars } from "../pages/CharacterFilters/StarsFilter";
import { CostFilter } from "../pages/CharacterFilters/CostFilter";
import { ComboFilter } from "../pages/CharacterFilters/ComboFilter";
import { TypeFilter } from "../pages/CharacterFilters/TypeFilter";
import { ClassFilter } from "../pages/CharacterFilters/ClassFilter";
import { CharacterFilters } from "../pages/CharacterFilters/index";

import { Provider } from "react-redux";
import configureStore from "../redux/store/configureStore";

describe("<Stars />", () => {
  const actions = { filterCharacters: jest.fn() };
  beforeEach(() => {
    render(<Stars actions={actions} />);
  });
  test("it renders", () => {
    const h2 = screen.getByText("Rarity filters");
    expect(h2).toBeInTheDocument();
  });
  test("there are 9 buttons", async () => {
    const btns = await screen.findAllByRole("button");
    expect(btns.length).toBe(9);
  });
  test("there is a button the client can interact with", () => {
    let btn = screen.getAllByRole("button")[0];
    fireEvent.click(btn);
    expect(actions.filterCharacters).toHaveBeenCalled();
  });
  test("there is a button that if clicked twice goes back to its normal opacity", () => {
    let btn = screen.getAllByRole("button")[0];
    fireEvent.click(btn);
    btn = screen.getAllByRole("button")[0];
    fireEvent.click(btn);
    expect(actions.filterCharacters).toHaveBeenCalled();
  });
});

describe("<CostFilter />", () => {
  const actions = { costFilter: jest.fn() };
  beforeEach(() => {
    render(<CostFilter actions={actions} />);
  });
  test("it renders", () => {
    const h2 = screen.getByText("Cost filters");
    expect(h2).toBeInTheDocument();
  });
  test("there is a slider the client can interact with", () => {
    const slider = screen.getAllByRole("slider")[0];
    fireEvent.mouseDown(slider, { clientX: 162, clientY: 302 });
    expect(actions.costFilter).toHaveBeenCalled();
  });
});

describe("<ComboFilter />", () => {
  const actions = { filterCharacters: jest.fn() };
  beforeEach(() => {
    render(<ComboFilter actions={actions} />);
  });
  test("it renders", () => {
    const h2 = screen.getByText("Combo filters");
    expect(h2).toBeInTheDocument();
  });
  test("there is a button the client can interact with", () => {
    const btn = screen.getAllByRole("button")[0];
    fireEvent.click(btn);
    expect(actions.filterCharacters).toHaveBeenCalled();
  });
});

describe("<TypeFilter />", () => {
  const actions = { filterCharacters: jest.fn() };
  beforeEach(() => {
    render(<TypeFilter actions={actions} />);
  });
  test("it renders", () => {
    const h2 = screen.getByText("Type filters");
    expect(h2).toBeInTheDocument();
  });
  test("there is a button the client can interact with", () => {
    let btn = screen.getAllByRole("button")[0];
    fireEvent.click(btn);
    expect(actions.filterCharacters).toHaveBeenCalled();
  });
  test("there is a button that if clicked twice goes back to its normal opacity", () => {
    let btn = screen.getAllByRole("button")[0];
    fireEvent.click(btn);
    btn = screen.getAllByRole("button")[0];
    fireEvent.click(btn);
    expect(actions.filterCharacters).toHaveBeenCalled();
  });
});

describe("<ClassFilter />", () => {
  const actions = { filterCharacters: jest.fn() };
  beforeEach(() => {
    render(<ClassFilter actions={actions} />);
  });
  test("it renders", () => {
    const h2 = screen.getByText("Class filters");
    expect(h2).toBeInTheDocument();
  });
  test("there is a button the client can interact with", () => {
    let btn = screen.getAllByRole("button")[0];
    fireEvent.click(btn);
    expect(actions.filterCharacters).toHaveBeenCalled();
  });
  test("there is a button that if clicked twice goes back to its normal opacity", () => {
    let btn = screen.getAllByRole("button")[0];
    fireEvent.click(btn);
    btn = screen.getAllByRole("button")[0];
    fireEvent.click(btn);
    expect(actions.filterCharacters).toHaveBeenCalled();
  });
});
describe("<CharacterFilters />", () => {
  const actions = { filterCharacters: jest.fn(), clearFilters: jest.fn() };
  const store = configureStore();
  beforeEach(() => {
    render(
      <Provider store={store}>
        <CharacterFilters actions={actions} />
      </Provider>
    );
  });
  test("it renders", () => {
    const btn = screen.getByText("CLEAR ALL FILTERS");
    expect(btn).toBeInTheDocument();
  });
  test("there is a button the client can interact with", () => {
    const btn = screen.getByText("CLEAR ALL FILTERS");
    fireEvent.click(btn);
    expect(actions.clearFilters).toHaveBeenCalled();
  });
});

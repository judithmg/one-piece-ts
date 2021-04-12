import charactersReducer from "../redux/reducers/charactersReducer";
import actionTypes from "../redux/actions/actionTypes";
import initialState from "../redux/store/initialState";

describe("Given a charactersReducer function", () => {
  let state;

  beforeEach(() => {
    state = [];
  });
  describe("When it is called with an action with type LOAD_ALL_CHARACTERS", () => {
    test("Then the state should be modified and characters.length should be 2", () => {
      const data = [{ id: 8 }, { id: 10 }];
      const fakeAction = {
        type: actionTypes.LOAD_ALL_CHARACTERS,
        data,
      };
      const answer = charactersReducer(state, fakeAction);
      expect(answer.characters.length).toBe(2);
    });
  });
  describe("When it is called with an action with type LOAD_ONE_CHARACTER", () => {
    test("Then the state should be modified and character should be returned", () => {
      const query = 8;
      state.characters = [{ id: 8 }, { id: 10 }];
      const fakeAction = {
        type: actionTypes.LOAD_ONE_CHARACTER,
        query,
      };
      const answer = charactersReducer(state, fakeAction);
      expect(answer.character).toEqual({ id: 8 });
    });
  });
  describe("When it is called with an action with type LOAD_CHARACTER_DETAIL", () => {
    test("Then the state should be modified and char detail should be returned", () => {
      const query = 8;
      const data = [{ id: 8 }, { id: 10 }];
      const fakeAction = {
        type: actionTypes.LOAD_CHARACTER_DETAIL,
        query,
        data,
      };
      const answer = charactersReducer(state, fakeAction);
      expect(answer.charDetail).toEqual({ id: 8 });
    });
  });
  describe("When it is called with an action with type FILTER_CHARACTER", () => {
    test("Then the state should be modified and chars filtered should be returned", () => {
      const filter = { key: "class", value: "cerebral" };
      state.filters = [];
      state.characters = [
        { id: 8, class: "cerebral" },
        { id: 10, class: "fighter" },
      ];
      const fakeAction = {
        type: actionTypes.FILTER_CHARACTER,
        filter,
      };
      const answer = charactersReducer(state, fakeAction);
      expect(answer.charactersFiltered).toEqual([{ id: 8, class: "cerebral" }]);
    });
    test("Then the state should be modified and filter wont be applied if state already contains a filter applied", () => {
      const filter = { key: "class", value: "cerebral" };
      state.filters = [{ key: "class", value: "cerebral" }];
      state.characters = [
        { id: 8, class: "cerebral" },
        { id: 10, class: "fighter" },
      ];
      const fakeAction = {
        type: actionTypes.FILTER_CHARACTER,
        filter,
      };
      const answer = charactersReducer(state, fakeAction);
      expect(answer.charactersFiltered).toEqual([
        { id: 8, class: "cerebral" },
        { id: 10, class: "fighter" },
      ]);
    });
    test("Then the state should be modified and filter is applied if its key is stars or combo", () => {
      const filter = { key: "stars", value: "4" };
      state.filters = [];
      state.characters = [
        { id: 8, stars: "4" },
        { id: 10, class: "fighter" },
      ];
      const fakeAction = {
        type: actionTypes.FILTER_CHARACTER,
        filter,
      };
      const answer = charactersReducer(state, fakeAction);
      expect(answer.charactersFiltered).toEqual([{ id: 8, stars: "4" }]);
    });
  });
  describe("When it is called with an action with type COST_FILTER", () => {
    test("Then the state should be modified and filter is applied if cost filter is applied", () => {
      const filter = [0, 6];
      state.filters = [];
      state.characters = [
        { id: 8, cost: 5 },
        { id: 10, class: "fighter" },
      ];
      const fakeAction = {
        type: actionTypes.COST_FILTER,
        filter,
      };
      const answer = charactersReducer(state, fakeAction);
      expect(answer.charactersFiltered).toEqual([{ id: 8, cost: 5 }]);
    });
  });
  describe("When it is called with an action with type CLEAR_FILTERS", () => {
    test("Then all filters from state are removed", () => {
      state.filters = [{ class: "cerebral" }];

      const fakeAction = {
        type: actionTypes.CLEAR_FILTERS,
      };
      const answer = charactersReducer(state, fakeAction);
      expect(answer.filters).toEqual([]);
    });
  });
  describe("When it is called with an action with type LOAD_CHARS_SHOWN", () => {
    test("Then the state should be modified and an array of same length as charsPerPage will be returned", () => {
      state.charactersFiltered = [
        { id: 8, class: "cerebral" },
        { id: 10, class: "fighter" },
      ];
      const fakeAction = {
        type: actionTypes.LOAD_CHARS_SHOWN,
        page: 0,
        charsPerPage: 10,
      };
      const answer = charactersReducer(state, fakeAction);
      expect(answer.charsShown).toEqual([
        { id: 8, class: "cerebral" },
        { id: 10, class: "fighter" },
      ]);
    });
  });
  describe("When the default is returned", () => {
    test("Then the initialState should be returned", () => {
      state = undefined;
      expect(charactersReducer(state, { type: "fake" })).toEqual(
        initialState.charactersReducer
      );
    });
  });
});

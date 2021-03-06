import axios from "axios";
import {
  loadOneCharacter,
  loadCharacterDetail,
  loadAllCharacters,
  loadCharsShown,
  filterCharacters,
  clearFilters,
  costFilter,
  areCharactersLoading,
  isOneCharLoading,
} from "../redux/actions/charactersActions";
import configureStore from "../redux/store/configureStore";
import actionTypes from "../redux/actions/actionTypes";

jest.mock("axios");
describe("Given charactersActions", () => {
  let store;
  beforeEach(() => {
    store = configureStore();
    store.dispatch = jest.fn();
    axios.get = jest.fn().mockImplementationOnce(() =>
      Promise.resolve({
        data: "falseData",
      })
    );
  });
  afterEach(() => {
    store = null;
  });
  let query = 5;
  let page = 5;
  let charsPerPage = 5;

  let filter = {
    key: "key",
    value: "value",
  };

  describe("When loadOneCharacter is called", () => {
    test("Then an action is returned", () => {
      const mockReturnValue = loadOneCharacter(query);
      expect(mockReturnValue).toEqual({
        type: actionTypes.LOAD_ONE_CHARACTER,
        query,
      });
    });
  });
  describe("When areCharactersLoading is called", () => {
    test("Then an action is returned", () => {
      const mockReturnValue = areCharactersLoading();
      expect(mockReturnValue).toEqual({
        type: actionTypes.LOADING_CHARACTERS,
      });
    });
  });
  describe("When isOneCharLoading is called", () => {
    test("Then an action is returned", () => {
      const mockReturnValue = isOneCharLoading();
      expect(mockReturnValue).toEqual({
        type: actionTypes.LOADING_ONE_CHAR,
      });
    });
  });
  describe("When loadCharacterDetail is called", () => {
    test("Then an action is returned", async () => {
      const dispatchFunction = loadCharacterDetail(8);
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_CHARACTER_DETAIL,
        data: "falseData",
        query: 8,
      });
    });
  });
  describe("When loadAllCharacters is called", () => {
    test("Then an action is returned", async () => {
      const dispatchFunction = loadAllCharacters();
      await dispatchFunction(store.dispatch);

      expect(store.dispatch).toHaveBeenCalledWith({
        type: actionTypes.LOAD_ALL_CHARACTERS,
        data: "falseData",
      });
    });
  });
  describe("When loadCharsShown is called", () => {
    test("Then an action is returned", () => {
      const mockReturnValue = loadCharsShown(page, charsPerPage);
      expect(mockReturnValue).toEqual({
        type: actionTypes.LOAD_CHARS_SHOWN,
        page,
        charsPerPage,
      });
    });
  });
  describe("When filterCharacters is called", () => {
    test("Then an action is returned", () => {
      const mockReturnValue = filterCharacters(filter);
      expect(mockReturnValue).toEqual({
        type: actionTypes.FILTER_CHARACTER,
        filter,
      });
    });
    test("Then undefined is returned if filter does not have key AND value", () => {
      const mockReturnValue = filterCharacters({ key: "" });
      expect(mockReturnValue).toEqual(undefined);
    });
  });
  describe("When costFilter is called", () => {
    test("Then an action is returned", () => {
      const mockReturnValue = costFilter(filter);
      expect(mockReturnValue).toEqual({
        type: actionTypes.COST_FILTER,
        filter,
      });
    });
  });
  describe("When clearFilters is called", () => {
    test("Then an action is returned", () => {
      const mockReturnValue = clearFilters();
      expect(mockReturnValue).toEqual({
        type: actionTypes.CLEAR_FILTERS,
      });
    });
  });
});

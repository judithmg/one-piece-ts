import {
  loadOneCharacter,
  loadCharacterDetail,
  loadAllCharacters,
  loadCharsShown,
  filterCharacters,
  clearFilters,
  costFilter,
} from "../redux/actions/charactersActions";
import units from "../data/updatedUnits.json";
import detail from "../data/details.json";
import actionTypes from "../redux/actions/actionTypes";

describe("Given charactersActions", () => {
  let query = 5;
  let page = 5;
  let charsPerPage = 5;

  let filter = {};

  describe("When loadOneCharacter is called", () => {
    test("Then an action is returned", () => {
      const mockReturnValue = loadOneCharacter(query);
      expect(mockReturnValue).toEqual({
        type: actionTypes.LOAD_ONE_CHARACTER,
        query,
      });
    });
  });
  describe("When loadCharacterDetail is called", () => {
    test("Then an action is returned", () => {
      const mockReturnValue = loadCharacterDetail(query);
      expect(mockReturnValue).toEqual({
        type: actionTypes.LOAD_CHARACTER_DETAIL,
        query,
        data: detail,
      });
    });
  });
  describe("When loadAllCharacters is called", () => {
    test("Then an action is returned", () => {
      const mockReturnValue = loadAllCharacters();
      expect(mockReturnValue).toEqual({
        type: actionTypes.LOAD_ALL_CHARACTERS,
        data: units,
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

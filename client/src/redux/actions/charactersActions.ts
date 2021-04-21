import actionTypes from "./actionTypes";
import { AppDispatch } from "../store/configureStore";
import { CharacterActionTypes, filterInterface } from "../../interfaces";

import details from "../../data/details.json";
import units from "../../data/updatedUnits.json";

function areCharactersLoading(): CharacterActionTypes {
  return {
    type: actionTypes.LOADING_CHARACTERS,
  };
}

function isOneCharLoading(): CharacterActionTypes {
  return {
    type: actionTypes.LOADING_ONE_CHAR,
  };
}

function loadOneCharacter(query: number): CharacterActionTypes {
  return {
    type: actionTypes.LOAD_ONE_CHARACTER,
    query,
  };
}

function loadCharacterDetail(query: number) {
  return (dispatch: AppDispatch) => {
    const data = details;
    dispatch({
      type: actionTypes.LOAD_CHARACTER_DETAIL,
      data,
      query,
    });
  };
}

function loadAllCharacters() {
  return (dispatch: AppDispatch) => {
    const data = units;
    console.log(data);
    dispatch({
      type: actionTypes.LOAD_ALL_CHARACTERS,
      data,
    });
  };
}

function loadCharsShown(
  page: number,
  charsPerPage: number
): CharacterActionTypes {
  return {
    type: actionTypes.LOAD_CHARS_SHOWN,
    page,
    charsPerPage,
  };
}

function filterCharacters(filter: filterInterface): CharacterActionTypes {
  if (filter.key && filter.value)
    return {
      type: actionTypes.FILTER_CHARACTER,
      filter,
    };
}

function clearFilters(): CharacterActionTypes {
  return {
    type: actionTypes.CLEAR_FILTERS,
  };
}

function costFilter(filter: number[]): CharacterActionTypes {
  return {
    type: actionTypes.COST_FILTER,
    filter,
  };
}

export {
  loadOneCharacter,
  loadCharacterDetail,
  loadAllCharacters,
  loadCharsShown,
  filterCharacters,
  clearFilters,
  costFilter,
  areCharactersLoading,
  isOneCharLoading,
};

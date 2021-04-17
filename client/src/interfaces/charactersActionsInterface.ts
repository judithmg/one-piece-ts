import { characterInterface, filterInterface } from '.'
import actionTypes from '../redux/actions/actionTypes'

type loadOneCharacterAction = {
    type: typeof actionTypes.LOAD_ONE_CHARACTER
    query: number
}

type loadAllCharactersAction = {
    type: typeof actionTypes.LOAD_ALL_CHARACTERS
    data: characterInterface[]
}

type areCharactersLoadingAction = {
    type: typeof actionTypes.LOADING_CHARACTERS
}

type isOneCharLoadingAction = {
    type: typeof actionTypes.LOADING_ONE_CHAR
}

type loadCharsShownAction = {
    type: typeof actionTypes.LOAD_CHARS_SHOWN,
    page: number, charsPerPage: number
};

type filterCharactersAction = {
    type: typeof actionTypes.FILTER_CHARACTER,
    filter: filterInterface
}

type clearFiltersAction = {
    type: typeof actionTypes.CLEAR_FILTERS
}

type costFilterAction = {
    type: typeof actionTypes.COST_FILTER,
    filter: number[]
}

export type CharacterActionTypes = loadOneCharacterAction |
    loadAllCharactersAction |
    areCharactersLoadingAction |
    isOneCharLoadingAction |
    loadCharsShownAction |
    filterCharactersAction |
    clearFiltersAction |
    costFilterAction | undefined
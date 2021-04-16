import actionTypes from '../actions/actionTypes'
import { AnyAction } from 'redux'
import initialState from '../store/initialState'
import { characterInterface, characterDetail } from '../../interfaces/charsInterface'
export interface charactersState {
    characters?: characterInterface[]
    charactersFiltered?: characterInterface[]
    character?: characterInterface | null
    charsShown?: characterInterface[]
    charDetail?: characterDetail
    filters: any[]
    costFilter?: number[]
    loadingCharacters: boolean
    loadingOneChar: boolean
}

export default function charactersReducer(state: charactersState = initialState.charactersReducer, action: AnyAction): charactersState {
    let foundCharacter
    let tempFilters: any[]
    let result
    let filters
    let characters
    switch (action.type) {

        case actionTypes.LOADING_CHARACTERS:
            return { ...state, loadingCharacters: true }

        case actionTypes.LOADING_ONE_CHAR:
            return { ...state, loadingOneChar: true }

        case actionTypes.LOAD_ALL_CHARACTERS:
            characters = action.data?.sort((a: characterInterface, b: characterInterface) => a.id! - b.id!)
            return { ...state, characters, charactersFiltered: characters, loadingCharacters: false }

        case actionTypes.LOAD_ONE_CHARACTER:
            foundCharacter = state?.characters?.find((char) => char.id === action.query)
            return { ...state, character: foundCharacter }

        case actionTypes.LOAD_CHARS_SHOWN:
            return {
                ...state,
                charsShown: state?.charactersFiltered?.slice((action.page) * action.charsPerPage, (action.page + 1) * action.charsPerPage),
            };

        case actionTypes.LOAD_CHARACTER_DETAIL:
            foundCharacter = action?.data?.find((char: any) => +char.id === +action.query)
            return {
                ...state,
                charDetail: foundCharacter,
                loadingOneChar: false
            }

        case actionTypes.FILTER_CHARACTER:
            // check if filter was already applied
            if (state.filters.filter(e => (e.value === action.filter.value)).length > 0) {
                tempFilters = state.filters?.filter(e => e.value !== action.filter.value)
            } else {
                filters = action.filter
                tempFilters = [...state.filters, filters];
            }
            if (action.filter.key !== 'stars' && action.filter.key !== 'combo') {
                result = state?.characters?.filter((unit: any) => tempFilters?.every((filter: any) => unit[filter.key] === filter.value || isNaN(unit[filter.key]) ? unit[filter.key]?.includes(filter.value) : false))
            } else {
                result = state?.characters?.filter((unit: any) => tempFilters?.every((filter: any) => unit[filter.key] === filter.value))
            }
            return {
                ...state,
                charactersFiltered: result,
                filters: tempFilters
            }

        case actionTypes.COST_FILTER:
            result = state?.characters?.filter((unit: any) => unit.cost > action.filter[0] && unit.cost < action.filter[1])
            return {
                ...state,
                charactersFiltered: result,
                costFilter: action.filter
            }

        case actionTypes.CLEAR_FILTERS:
            return {
                ...state,
                filters: [],
                costFilter: [0, 99],
                charactersFiltered: state.characters
            }

        default:
            return state
    }
}
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
}



export default function charactersReducer(state: charactersState = initialState.charactersReducer, action: AnyAction): charactersState {
    let foundCharacter
    let tempFilters: any[]
    let result
    let filters
    switch (action.type) {
        case actionTypes.LOAD_ALL_CHARACTERS:
            return { ...state, characters: action.data, charactersFiltered: action.data }

        case actionTypes.LOAD_ONE_CHARACTER:
            foundCharacter = state?.characters?.find((char) => char.id === action.query)
            return { ...state, character: foundCharacter }

        case actionTypes.LOAD_CHARS_SHOWN:
            return {
                ...state,
                charsShown: state?.charactersFiltered?.slice((action.page) * action.charsPerPage, (action.page + 1) * action.charsPerPage),
            };

        case actionTypes.LOAD_CHARACTER_DETAIL:
            foundCharacter = action?.data?.find((char: any) => +char.id === action.query)
            return {
                ...state,
                charDetail: foundCharacter
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
                result = state?.characters?.filter((unit: any) => tempFilters?.every((filter: any) => unit[filter.key] === filter.value || unit[filter.key].includes(filter.value)))
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
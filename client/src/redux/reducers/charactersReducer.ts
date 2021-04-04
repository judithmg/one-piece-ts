import actionTypes from '../actions/actionTypes'
import { AnyAction } from 'redux'
import initialState from '../store/initialState'
import { characterInterface, characterDetail } from '../../interfaces/stateInterfaces'

export interface charactersState {
    characters?: characterInterface[]
    character?: characterInterface | null
    charsShown?: characterInterface[]
    charDetail?: characterDetail
}



export default function charactersReducer(state: charactersState = initialState.charactersReducer, action: AnyAction): charactersState {
    let foundCharacter
    switch (action.type) {
        case actionTypes.LOAD_ALL_CHARACTERS:
            return { ...state, characters: action.data }

        case actionTypes.LOAD_ONE_CHARACTER:
            foundCharacter = state?.characters?.find((char) => char.id === action.query)
            return { ...state, character: foundCharacter }

        case actionTypes.LOAD_CHARS_SHOWN:
            return {
                ...state,
                charsShown: state?.characters?.slice((action.page) * action.charsPerPage, (action.page + 1) * action.charsPerPage),
            };

        case actionTypes.LOAD_CHARACTER_DETAIL:
            foundCharacter = action?.data?.find((char: any) => +char.id === action.query)
            return {
                ...state,
                charDetail: foundCharacter
            }
        default:
            return state
    }
}
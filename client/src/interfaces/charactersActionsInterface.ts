import { characterInterface } from './stateInterfaces'
import actionTypes from '../redux/actions/actionTypes'

type loadOneCharacterAction = {
    type: typeof actionTypes.LOAD_ONE_CHARACTER
    query: number
}

type loadAllCharactersAction = {
    type: typeof actionTypes.LOAD_ALL_CHARACTERS
    data: characterInterface
}

export type CharactersActionsTypes =
    loadOneCharacterAction |
    loadAllCharactersAction
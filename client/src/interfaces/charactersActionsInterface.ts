import { characterInterface } from './stateInterfaces'
import actionTypes from '../redux/actions/actionTypes'

export type loadOneCharacterAction = {
    type: typeof actionTypes.LOAD_ONE_CHARACTER
    query: number
}

export type loadAllCharactersAction = {
    type: typeof actionTypes.LOAD_ALL_CHARACTERS
    data: characterInterface[]
}


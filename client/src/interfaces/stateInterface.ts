import { characterInterface, characterDetail } from './charsInterface'

export interface filterInterface {
    key: 'type' |
    'class' |
    'stars' |
    'cost' |
    'combo'
    value: string | number
}

export interface charactersState {
    characters?: characterInterface[]
    charactersFiltered?: characterInterface[]
    character?: characterInterface | null
    charsShown?: characterInterface[]
    charDetail?: characterDetail
    filters: filterInterface[]
    costFilter?: number[]
    loadingCharacters: boolean
    loadingOneChar: boolean
}
import { characterInterface } from './charsInterface'

export interface props {
    unit: characterInterface
    characters: characterInterface[]
    charsShown: characterInterface[]
    charactersFiltered: characterInterface[]
    actions: {
        loadOneCharacter: Function
        loadCharacterDetail: Function
        loadAllCharacters: Function
        loadCharsShown: Function
        filterCharacters: Function
        clearFilters: Function
        costFilter: Function
    }
    filters: {
        key: string
        value: string
    }[]
}
import actionTypes from './actionTypes'
import units from '../../data/updatedUnits.json'
import detail from '../../data/details.json'

export function loadOneCharacter(query: number) {
    return {
        type: actionTypes.LOAD_ONE_CHARACTER,
        query
    }
}

export function loadCharacterDetail(query: number) {

    return {
        type: actionTypes.LOAD_CHARACTER_DETAIL,
        query,
        data: detail
    }
}

export function loadAllCharacters() {
    return {
        type: actionTypes.LOAD_ALL_CHARACTERS,
        data: units
    }
}

export function loadCharsShown(page: number, charsPerPage: number) {
    return {
        type: actionTypes.LOAD_CHARS_SHOWN,
        page,
        charsPerPage
    };
}

export function filterCharacters(filter: object) {
    return {
        type: actionTypes.FILTER_CHARACTER,
        filter
    }
}

export function clearFilters() {
    return {
        type: actionTypes.CLEAR_FILTERS
    }
}

export function costFilter(filter: number[]) {
    return {
        type: actionTypes.COST_FILTER,
        filter
    }
}
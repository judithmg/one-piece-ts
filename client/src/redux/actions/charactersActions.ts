import actionTypes from './actionTypes'
import units from '../../data/updatedUnits.json'
import detail from '../../data/details.json'

function loadOneCharacter(query: number) {
    return {
        type: actionTypes.LOAD_ONE_CHARACTER,
        query
    }
}

function loadCharacterDetail(query: number) {

    return {
        type: actionTypes.LOAD_CHARACTER_DETAIL,
        query,
        data: detail
    }
}

function loadAllCharacters() {
    return {
        type: actionTypes.LOAD_ALL_CHARACTERS,
        data: units
    }
}

function loadCharsShown(page: number, charsPerPage: number) {
    return {
        type: actionTypes.LOAD_CHARS_SHOWN,
        page,
        charsPerPage
    };
}

function filterCharacters(filter: object) {
    return {
        type: actionTypes.FILTER_CHARACTER,
        filter
    }
}

function clearFilters() {
    return {
        type: actionTypes.CLEAR_FILTERS
    }
}

function costFilter(filter: number[]) {
    return {
        type: actionTypes.COST_FILTER,
        filter
    }
}

export {
    loadOneCharacter,
    loadCharacterDetail,
    loadAllCharacters,
    loadCharsShown,
    filterCharacters,
    clearFilters,
    costFilter,
}
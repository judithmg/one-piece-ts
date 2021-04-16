import actionTypes from './actionTypes'
import { AppDispatch } from '../store/configureStore'
import axios from 'axios'
import { dbUrls } from '../../constants/'

function areCharactersLoading() {
    return {
        type: actionTypes.LOADING_CHARACTERS
    }
}

function isOneCharLoading() {
    return {
        type: actionTypes.LOADING_ONE_CHAR
    }
}

function loadOneCharacter(query: number) {
    return {
        type: actionTypes.LOAD_ONE_CHARACTER,
        query
    }
}

function loadCharacterDetail(query: number) {
    return async (dispatch: AppDispatch) => {
        const { data } = await axios.get(`${dbUrls.base}/details`)
        dispatch({
            type: actionTypes.LOAD_CHARACTER_DETAIL,
            data,
            query
        })
    }
}

function loadAllCharacters() {
    return async (dispatch: AppDispatch) => {
        const { data } = await axios.get(`${dbUrls.base}/characters`)
        dispatch({
            type: actionTypes.LOAD_ALL_CHARACTERS,
            data
        })
    }
}

function loadCharsShown(page: number, charsPerPage: number) {
    return {
        type: actionTypes.LOAD_CHARS_SHOWN,
        page,
        charsPerPage
    };
}

function filterCharacters(filter: {
    key: string
    value: string
}) {
    if (filter.key && filter.value)
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
    areCharactersLoading,
    isOneCharLoading
}
import actionTypes from './actionTypes'
import { AppDispatch } from '../store/configureStore'
import axios from 'axios'
import dbUrls from '../../constants/dbUrls'

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
interface actionTypesInterface {
    LOAD_ALL_CHARACTERS: string,
    LOAD_ONE_CHARACTER: string,
    LOAD_CHARS_SHOWN: string
    LOAD_CHARACTER_DETAIL: string
}

const actionTypes: actionTypesInterface = {
    LOAD_ALL_CHARACTERS: 'LOAD_ALL_CHARACTERS',
    LOAD_ONE_CHARACTER: 'LOAD_ONE_CHARACTER',
    LOAD_CHARS_SHOWN: 'LOAD_CHARS_SHOWN',
    LOAD_CHARACTER_DETAIL: 'LOAD_CHARACTER_DETAIL'
}

export default actionTypes
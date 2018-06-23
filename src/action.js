import { CHANGE_SERCH_FIELD } from './constants.js';


export const setSearchField = (text) => ({
type: CHANGE_SERCH_FIELD,
payload: text
})

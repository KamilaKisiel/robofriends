import { CHANGE_SERCH_FIELD } from './constants.js';


const initialState = {
    searchField: ''
}

export const searchRobots = (state=initialState, action={}) => {
    switch(action.type) {
        case: CHANGE_SERCH_FIELD;
        return Object.assign({}, state, {searchField: action.payload});
        default:
        return state;

    }
}
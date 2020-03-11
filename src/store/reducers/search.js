import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    searchQueryValue: '',
    valid: false
};

const queryValid = (state, action) => {
    return updateObject(state, {
        searchQueryValue: action.queryValue,
        valid: true
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.QUERY_VALID:
            return queryValid(state, action);
        default:
            return state;
    }
};

export default reducer;

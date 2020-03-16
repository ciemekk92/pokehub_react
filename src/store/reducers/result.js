import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    id: null,
    name: '',
    spriteFront: '',
    spriteBack: '',
    types: [],
    height: null,
    weight: null,
    stats: [],
    baseExperience: null,
    abilities: [],
    moves: [],
    displayResult: false,
    error: null,
    loading: false,
    loaded: false
};

const setResult = (state, action) => {
    return updateObject(state, {
        id: action.result.id,
        name: action.result.name,
        spriteFront: action.result.sprites.front_default,
        spriteBack: action.result.sprites.back_default,
        types: action.result.types,
        height: action.result.height,
        weight: action.result.weight,
        stats: action.result.stats,
        baseExperience: action.result.base_experience,
        abilities: action.result.abilities,
        moves: action.result.moves,
        error: null,
        displayResult: true,
        loaded: true
    });
};

const resetBox = (state, action) => {
    return updateObject(state, {
        displayResult: false,
        error: null
    });
};

const enableLoading = (state, action) => {
    return updateObject(state, {
        loading: true
    });
};

const disableLoading = (state, action) => {
    return updateObject(state, {
        loading: false
    });
};

const fetchResultFailed = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_RESULT:
            return setResult(state, action);
        case actionTypes.FETCH_RESULT_FAILED:
            return fetchResultFailed(state, action);
        case actionTypes.RESET_BOX:
            return resetBox(state, action);
        case actionTypes.ENABLE_LOADING:
            return enableLoading(state, action);
        case actionTypes.DISABLE_LOADING:
            return disableLoading(state, action);
        default:
            return state;
    }
};

export default reducer;

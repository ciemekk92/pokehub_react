import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setResult = result => {
    return {
        type: actionTypes.SET_RESULT,
        result: result
    };
};

export const resetBox = () => {
    return {
        type: actionTypes.RESET_BOX
    };
};

export const enableLoading = () => {
    return {
        type: actionTypes.ENABLE_LOADING
    };
};

export const disableLoading = () => {
    return {
        type: actionTypes.DISABLE_LOADING
    };
};

export const fetchResultFailed = error => {
    return {
        type: actionTypes.FETCH_RESULT_FAILED,
        error: error
    };
};

export const nextResult = query => {
    return dispatch => {
        dispatch(resetBox());
        setTimeout(() => {
            dispatch(initResult(query));
        }, 1000);
    };
};

export const initResult = query => {
    return dispatch => {
        dispatch(enableLoading());
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
            .then(response => {
                dispatch(disableLoading());
                if (response.data.sprites.front_default) {
                    setTimeout(() => {
                        dispatch(setResult(response.data));
                    }, 100);
                }
            })
            .catch(error => {
                dispatch(fetchResultFailed(error));
            });
    };
};

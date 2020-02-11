import * as actionTypes from './actionTypes';
import axios from 'axios';

export const setResult = result => {
   return {
      type: actionTypes.SET_RESULT,
      result: result
   };
};

export const fetchResultFailed = () => {
   return {
      type: actionTypes.FETCH_RESULT_FAILED
   };
};

export const initResult = query => {
   return dispatch => {
      axios
         .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
         .then(response => {
            dispatch(setResult(response.data));
         })
         .catch(error => {
            dispatch(fetchResultFailed());
         });
   };
};

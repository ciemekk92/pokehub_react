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

export const enableBox = () => {
   return {
      type: actionTypes.ENABLE_BOX
   };
};

export const fetchResultFailed = () => {
   return {
      type: actionTypes.FETCH_RESULT_FAILED
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
      axios
         .get(`https://pokeapi.co/api/v2/pokemon/${query}`)
         .then(response => {
            dispatch(setResult(response.data));
            console.log(response.data);
         })
         .catch(error => {
            dispatch(fetchResultFailed());
         });
   };
};

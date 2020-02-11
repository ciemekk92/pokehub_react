import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
   id: null,
   name: '',
   types: [],
   sprite: '',
   error: false,
   loading: false
};

const setResult = (state, action) => {
   return updateObject(state, {
      id: action.result.id,
      name: action.result.name,
      types: action.result.types,
      sprite: action.result.sprites.front_default
   });
};

const fetchResultFailed = (state, action) => {
   return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.SET_RESULT:
         return setResult(state, action);
      case actionTypes.FETCH_RESULT_FAILED:
         return fetchResultFailed(state, action);
      default:
         return state;
   }
};

export default reducer;

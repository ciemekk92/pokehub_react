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
   baseExperience: null,
   error: false,
   loading: false,
   displayBox: 'none'
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
      baseExperience: action.result.base_experience,
      displayBox: 'block'
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

import * as actionTypes from '../actions/actionTypes';

export const queryValid = queryValue => {
   return {
      type: actionTypes.QUERY_VALID,
      queryValue: queryValue
   };
};

import { ActionReducer, Action } from '@ngrx/store';

import { INFO, ISAUTH } from './actions';

export const authReducer = function (state: Object, action) {
  debugger;
  switch(action.type) {
    case INFO:
      return { ...state, userInfo: action.payload };
    case ISAUTH:
      return { ...state, isAuthorized: action.payload };
    default:
      return state;
  };
}

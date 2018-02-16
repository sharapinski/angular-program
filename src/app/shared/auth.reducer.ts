import { AuthActionTypes, AuthActions  } from './actions';

export default function authReducer(state: Object = {}, action: AuthActions ) {
  debugger;
  switch(action.type) {
    case AuthActionTypes.INFO:
      return { ...state, userInfo: action.payload };
    case AuthActionTypes.ISAUTH:
      return { ...state, isAuthorized: action.payload };
    default:
      return state;
  };
}

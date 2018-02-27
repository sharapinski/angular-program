import { Action } from '@ngrx/store';
import { User } from './user';

export enum AuthActionTypes {
  INFO = 'info',
  ISAUTH = 'isAuth'
}

export class Info implements Action {
  readonly type = AuthActionTypes.INFO;

  constructor(public payload: any) {}
}

export class IsAuth implements Action {
  readonly type = AuthActionTypes.ISAUTH;

  constructor(public payload: boolean) {}
}

export type AuthActions = Info | IsAuth;

export interface State {
  user: User,
  isAuthorized: boolean
}

export const initialState: State = {
  user: null,
  isAuthorized: false
};

export function authReducer(state: State = initialState, action: AuthActions): State {
  switch(action.type) {
    case AuthActionTypes.INFO:
      const firstName = action.payload && action.payload.name && action.payload.name.first;
      const lastName = action.payload && action.payload.name && action.payload.name.last;
      return { ...state, user: new User(firstName, lastName) };
    case AuthActionTypes.ISAUTH:
      return { ...state, isAuthorized: action.payload };
    default:
      return state;
  };
}

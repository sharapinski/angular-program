import { Action } from '@ngrx/store';

export interface AppState {
  authoriser: Object;
}

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

  constructor(public payload: any) {}
}

export type AuthActions
  = Info
  | IsAuth;

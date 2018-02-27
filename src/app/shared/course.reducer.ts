import { Action } from '@ngrx/store';
import { Course } from './course';

export enum CourseListActionTypes {
  GETLIST = 'getlist',
  INIT = 'init'
}

export class Init implements Action {
  readonly type = CourseListActionTypes.INIT;
}

export class GetList implements Action {
  readonly type = CourseListActionTypes.GETLIST;

  constructor(public payload: any) {}
}

export type CourseListActions = Init | GetList;

export interface State {
  courses: Course[],
  // searchValue: string,
  page: {current: number, total: number}
}

export const initialState: State = {
  courses: [],
  // searchValue:  '',
  page: {current: 0, total: 0}
};

export function courseListReducer(state: State = initialState, action: CourseListActions): State {
  switch(action.type) {
    case CourseListActionTypes.GETLIST:
      const res = action.payload
      let page = res.facets && res.facets.pages ? res.facets.pages: null;
      let list = res.courses ? res.courses.filter(item => new Date(item.date).getTime() > new Date().getTime() - 14 * 24 * 60 * 60 * 1000): [];

      return { ...state, page: page ? page: state.page, courses: state.courses.concat(list) };
    case CourseListActionTypes.INIT:
    debugger;
      return initialState;
    default:
      return state;
  };
}

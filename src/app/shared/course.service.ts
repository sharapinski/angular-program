import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';

import { courses } from './data';
import { Course } from './course';

@Injectable()
export class CourseService {
  courses: Course[] = courses;
  mainThread: BehaviorSubject<Course[]>;

  constructor() {
    this.mainThread = new BehaviorSubject(this.courses);
  }

  getList(): Observable<Course[]> {
    // clone array to use the same ref
    // const courses = this.courses.map(x => Object.assign({}, x));

    return this.mainThread;
  }

  createItem(item: Course) {
    // save item
    this.courses.push(item);
    this.refreshMainThread()

    // return code 200
    // return Observable.of(200)
    //                 .catch(this.handleError);
  }

  getItemById(id: number): Observable<Course> {
    return Observable.from(this.courses)
                    .filter(item => item.id === id)
                    .catch(this.handleError);
  }

  updateItem(item: Course) {
    // find and update item
    let index = this.courses.findIndex(element => element.id == item.id);
    this.courses[index] = item;
    this.refreshMainThread();

    // return code 200
    // return Observable.of(200)
    //                 .catch(this.handleError);
  }

  removeItem(item: Course) {
    this.courses = this.courses.filter(element => element.id !== item.id);
    this.refreshMainThread();

    // return code 200
    // return Observable.of(200)
    //                 .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('Error: ', error);

    return Observable.throw(error);
  }

  private refreshMainThread() {
    this.mainThread.next(this.courses);
  }
}

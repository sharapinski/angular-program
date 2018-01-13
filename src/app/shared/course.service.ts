import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

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

  getList(): Observable<Course[]> {
    // clone array to use the same ref
    // const courses = this.courses.map(x => Object.assign({}, x));

    return Observable.of(courses)
                    .map(list => list.filter(course => Number(course.date) > new Date().getTime() - 14 * 24 * 60 * 1000))
                    .catch(this.handleError);
  }

  createItem(item: Course) {
    // save item
    this.courses.push(item);

    // return code 200
    return Observable.of(200)
                    .catch(this.handleError);
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

    // return code 200
    return Observable.of(200)
                    .catch(this.handleError);
  }

  removeItem(item: Course) {
    let statusCode = 200;
    this.courses = this.courses.filter(element => element.id !== item.id);

    // return code 200
    return Observable.of(200)
                    .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('Error: ', error);

    return Observable.throw(error);
  }
}

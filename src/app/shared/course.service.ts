import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, Response  } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/toPromise';

import { Course } from './course';
import { settings } from '../settings';

@Injectable()
export class CourseService {
  mainThread: BehaviorSubject<Course[]>;
  private _coursesUrl = `${settings.server}/courses?sort=date&count=10&page=`;

  constructor(private http: Http) {
    this.mainThread = new BehaviorSubject([]);
  }

  getList(str?: string, pageNumber?: number): any {
    let url = this._coursesUrl + (pageNumber || 1);
    url += str ? '&query='+str: '';
    this.http.get(url)
                    .toPromise()
                    .then((res: Response) => {
                        this.mainThread.next(res.json());
                    }, this.handleError);

    return this.mainThread;
  }

  createItem(item: Course) {
    // save item
    // this.courses.push(item);
    this.refreshMainThread()

    // return code 200
    // return Observable.of(200)
    //                 .catch(this.handleError);
  }

  // getItemById(id: number): Observable<Course> {
  //   return Observable.from(this.courses)
  //                   .filter(item => item.id === id)
  //                   .catch(this.handleError);
  // }

  // updateItem(item: Course) {
  //   // find and update item
  //   let index = this.courses.findIndex(element => element.id == item.id);
  //   this.courses[index] = item;
  //   this.refreshMainThread();
  //
  //   // return code 200
  //   // return Observable.of(200)
  //   //                 .catch(this.handleError);
  // }

  removeItem(item: Course) {
    // this.courses = this.courses.filter(element => element.id !== item.id);
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
    // this.mainThread.next(this.courses);
  }
}

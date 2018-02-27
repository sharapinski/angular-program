import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http, Headers, Response  } from '@angular/http';
import { Store } from '@ngrx/store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw'
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/toPromise';

import { Course } from './course';
import { settings } from '../settings';
import { AppState  } from './appstate';
import { GetList } from './course.reducer';

@Injectable()
export class CourseService {
  private _coursesUrl = `${settings.server}/courses`;

  constructor(private http: Http, private store: Store<AppState>) { }

  getList(str?: string, pageNumber?: number): void {
    let url = this._coursesUrl + '?sort=date&count=10&page=' + (pageNumber || 1);
    url += str ? '&query='+str: '';
    this.http.get(url)
                    .toPromise()
                    .then((res: Response) => {
                        this.store.dispatch(new GetList(res.json()));
                    }, this.handleError);
  }

  createItem(item: Course): Promise<any> {
    // save item
    // this.courses.push(item);
    // this.refreshMainThread()

    // return code 200
    // return Observable.of(200)
    //                 .catch(this.handleError);
    return new Promise(e => e);
  }

  getItemById(id: number): Promise<any> {
    let url = this._coursesUrl + '/' + id;
    return this.http.get(url)
                    .toPromise()
                    .catch(this.handleError);
  }
  //
  updateItem(item: Course): Promise<any> {
    let url = this._coursesUrl + '/' + item.id;
    return this.http.post(url, item)
                    .toPromise()
                    .catch(this.handleError);
  }

  removeItem(id: number): Promise<any> {
    let url = this._coursesUrl + '/' + id;
    return this.http.delete(url)
                    .toPromise()
                    .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('Error: ', error);

    return Observable.throw(error);
  }

  private refreshMainThread() {
    // this.mainThread.next(this.courses);
  }
}

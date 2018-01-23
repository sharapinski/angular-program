import { Injectable } from '@angular/core';
import { Http, Headers, Response  } from '@angular/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/toPromise';

import { User } from './user';
import { settings } from '../settings';


Injectable()
export class AuthService {
  private _key: string = 'courseAuth';
  public subject: ReplaySubject<User>;
  private _loginUrl = `${settings.server}/auth/login`;
  private _userInfooUrl = `${settings.server}/auth/userinfo`;

  constructor(private http: Http) {
    this.subject = new ReplaySubject(1);
  }

  login(login: string, password: string) {
    this.http.post(this._loginUrl, {login, password})
                    .toPromise()
                    .then((res: Response) => {
                        let user = res.json();
                        localStorage.setItem(this._key, user.token);
                        this.readUserInfo();
                    }, this.handleError);
  }

  logout() {
    localStorage.removeItem(this._key);

    this.subject.next(null);
  }

  isAuthorized(): boolean  {
    const user = localStorage.getItem(this._key);

    return !!user;
  }

  readUserInfo() {
    const sToken = localStorage.getItem(this._key);
    if(!sToken) {
      return;
    }

    const options = { headers: new Headers() };
    options.headers.set('Authorization', sToken);
    this.http.post(this._userInfooUrl, {}, options)
                    .toPromise()
                    .then((res: Response) => {
                        let user = res.json();
                        this.subject.next(new User(user.name.first, user.name.last));
                    }, this.handleError);
  }

  private handleError(error: any) {
    console.error('Error: ', error);

    alert(`${error.statusText}: ${error.text()}`);
  }
}

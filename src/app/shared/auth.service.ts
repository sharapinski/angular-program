import { Injectable } from '@angular/core';
import { Http, Headers, Response  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Store } from '@ngrx/store';

import { User } from './user';
import { settings } from '../settings';
import { Info, IsAuth, AppState } from './actions';


Injectable()
export class AuthService {
  private _key: string = 'courseAuth';
  private _loginUrl = `${settings.server}/auth/login`;
  private _userInfooUrl = `${settings.server}/auth/userinfo`;

  constructor(private http: Http, private store: Store<AppState>) {}

  login(login: string, password: string): Promise<any> {
    return this.http.post(this._loginUrl, {login, password})
                    .toPromise()
                    .then((res: Response) => {
                        let user = res.json();
                        localStorage.setItem(this._key, user.token);
                        this.readUserInfo();
                    });
  }

  logout(): void {
    localStorage.removeItem(this._key);
    this.store.dispatch(new IsAuth(false));
  }

  isAuthorized(): void  {
    const isAuthorized = !!localStorage.getItem(this._key);
    this.store.dispatch(new IsAuth(isAuthorized));
  }

  readUserInfo(): void {
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
                        debugger;
                        this.store.dispatch(new Info(user));
                    }, this.handleError);
  }

  private handleError(error: any): void {
    console.error('Error: ', error);

    alert(`${error.text()}`);
  }
}

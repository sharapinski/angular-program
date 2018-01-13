import { ReplaySubject } from 'rxjs/ReplaySubject';

import { User } from './user';

export class AuthService {
  private _key: string = 'courseAuth';
  public subject: ReplaySubject<User>;

  constructor() {
    this.subject = new ReplaySubject(1);
  }

  login(login: string, pass: string) {
    const user = {firstName: login, lastName: 'Smith'};
    localStorage.setItem(this._key, JSON.stringify(user));

    this.subject.next(user);
  }

  logout() {
    localStorage.removeItem(this._key);

    this.subject.next(null);
  }

  isAuthorized(): boolean  {
    const user = JSON.parse(localStorage.getItem(this._key));

    return !!user;
  }

  getUserInfo(): User {
    const user = JSON.parse(localStorage.getItem(this._key));

    return user;
  }
}

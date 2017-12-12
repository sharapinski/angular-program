import { user } from './userData';
import { User } from './user';

export class AuthService {
  private key: string = 'courseAuth';

  constructor(){
    this.login("test", "12345");
  }

  login(login: string, pass: string) {
    localStorage.setItem(this.key, JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem(this.key);
  }

  isAuthorized(): boolean {
    const user = JSON.parse(localStorage.getItem(this.key));
    return !!user;
  }

  getUserInfo(): User {
    const userInfo = JSON.parse(localStorage.getItem(this.key));
    const user = new User(userInfo.firstName, userInfo.lastName);
    return user;
  }
}

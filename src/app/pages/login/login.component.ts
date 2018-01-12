import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginValue: string;
  passwordValue: string;
  @Output('submit') login = new EventEmitter()

  onEnter() {
    this.login.emit({login: this.loginValue, password: this.loginValue});
  }
}

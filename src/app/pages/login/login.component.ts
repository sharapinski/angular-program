import { Component } from '@angular/core';

import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string = ""

  constructor(private _authService: AuthService) {}

  onEnter(form) {
    const promise = this._authService.login(form.value.user.login, form.value.user.password);
    promise.catch(res => this.message = (res && typeof(res.text) === "function") ? res.text(): "");
  }

  onChange(){
    this.message = "";
  }
}

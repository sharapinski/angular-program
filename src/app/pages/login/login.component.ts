import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/auth.service';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string = ""

  constructor(private _authService: AuthService, private router: Router) {}

  onEnter(form) {
    const promise = this._authService.login(form.value.user.login, form.value.user.password);
    promise.then(res => {
      this._authService.readUserInfo();
      this.router.navigate(["./courses"]);
    },
    res => this.message = (res && typeof(res.text) === "function") ? res.text(): "");
  }

  onChange() {
    this.message = "";
  }
}

import { Component } from '@angular/core';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent {

  constructor(private _authService: AuthService){}

  onSubmit(event){
    if(event.login) {
      this._authService.login(event.login, event.password);
      alert("Autorition was successful!");
      window.location.reload();
    }
  }

}

import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '../../shared/auth.service';
import { User } from '../../shared/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
    user: User;
    @Input() showLoginLogout: boolean;

    constructor(private authService: AuthService) {
      this.showLoginLogout = true;
    }

    ngOnInit() {
      this.user = this.authService.getUserInfo();
    }

    onLogoff() {
      this.authService.logout()
      console.log("onLogoff");
    }

    isAuth() : boolean {
      return this.authService.isAuthorized();
    }

    onLogin() {
      console.log("onLogin");
      // navTo login page
    }
}

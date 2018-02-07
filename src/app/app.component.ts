import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { AuthService } from './shared/auth.service';
import { User } from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  _subscription: Subscription;

  constructor(private _authService: AuthService,  private router: Router) {}

  ngOnInit() {
    // subscribe on userInfo
    // this._subscription = this._authService.subject.subscribe(userInfo => this.userInfo = userInfo);

    // check authorization
    let isAuthorized = this._authService.isAuthorized()
    if(isAuthorized) {
      this._authService.readUserInfo();
    } else {
      this.router.navigate(['./login']);
    }
  }

  ngOnDestroy() {
    if(this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}

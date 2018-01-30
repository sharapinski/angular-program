import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../../shared/auth.service';
import { User } from '../../shared/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    user: User;
    _subscription: Subscription;

    constructor(private _authService: AuthService) {}

    ngOnInit() {
      this._subscription = this._authService.subject.subscribe(userInfo => this.user = userInfo);
      this._authService.readUserInfo();
    }

    onLogoff() {
      this._authService.logout();
    }

    ngOnDestroy() {
      if(this._subscription) {
        this._subscription.unsubscribe();
      }
    }
}

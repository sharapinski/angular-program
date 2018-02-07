import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

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

    constructor(private _authService: AuthService,  private router: Router) {}

    ngOnInit() {
      this._subscription = this._authService.subject.subscribe(userInfo => this.user = userInfo);
      // this._authService.readUserInfo();
    }

    onLogoff() {
      this._authService.logout();
      this.router.navigateByUrl('login');
    }

    ngOnDestroy() {
      if(this._subscription) {
        this._subscription.unsubscribe();
      }
    }
}

import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../../shared/auth.service';
import { User } from '../../shared/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    user: User;
    subscription: Subscription;
    authoriser: Observable<any>;

    constructor(private _authService: AuthService,  private router: Router, private store: Store<any>) {
      this.authoriser = this.store.select<any>('authoriser');
    }

    ngOnInit() {
      this.subscription = this.store.subscribe(userInfo => {
        debugger;
        this.user = userInfo;});
    }

    onLogoff() {
      this._authService.logout();
      this.router.navigateByUrl('login');
    }

    ngOnDestroy() {
      if(this.subscription) {
        this.subscription.unsubscribe();
      }
    }
}

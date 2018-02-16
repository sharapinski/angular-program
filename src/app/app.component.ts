import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './shared/auth.service';
// import { User } from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  // userInfo: User;
  subscription: Subscription;
  authoriser$: Observable<any>;

  constructor(private authService: AuthService,  private router: Router, private store: Store<any>) {
    this.authoriser$ = store.pipe(select('authoriser'));
  }

  ngOnInit() {
    this.authService.isAuthorized();
    // subscribe on userInfo
    this.subscription = this.authoriser$.subscribe(state => {
      debugger;
      // this.userInfo = userInfo;
      if(!state || !state.userInfo) {
        this.navToLogin();
      }
    });

    // check authorization
    // let isAuthorized = this._authService.isAuthorized()
    // if(isAuthorized) {
    //   this.authService.readUserInfo();
    // } else {
    //   this.navToLogin();
    // }
  }

  navToLogin() {
    this.router.navigate(['./login']);
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

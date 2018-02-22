import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { AuthService } from '../../shared/auth.service';
import { User } from '../../shared/user';
import { AppState } from '../../shared/actions';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
    user: User;
    subscription: Subscription;
    authoriser$: Observable<any>;

    constructor(private _authService: AuthService,  private router: Router, private store: Store<AppState>) {
      this.authoriser$ = store.pipe(select('authoriser'));
    }

    ngOnInit() {
      this.subscription = this.authoriser$.subscribe(state => {
        debugger;
        this.user = state ? state.userInfo : null;
      });
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

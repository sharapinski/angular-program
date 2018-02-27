import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './shared/auth.service';
import { State } from './shared/auth.reducer';
import { AppState } from './shared/appstate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  auth$: Observable<State>;

  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) {
    this.auth$ = store.pipe(select('auth'));
  }

  ngOnInit() {
    this.subscription = this.auth$.subscribe((state: State) => {
      const path = state.isAuthorized ? '/courses': '/login';
      this.router.navigate([path]);
    })
    this.authService.isAuthorized();
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';

import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthorized: boolean;
  _subscription: any;

  constructor(private _authService: AuthService) {
    this.isAuthorized = this._authService.isAuthorized();
  }

  ngOnInit() {
    this._authService.subject.subscribe(res => this.isAuthorized = !!res);
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}

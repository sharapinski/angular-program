import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  isAuthorized: boolean;
  _subscription: Subscription;

  constructor(private _authService: AuthService) {
    this.isAuthorized = this._authService.isAuthorized();
  }

  ngOnInit() {
    this._subscription = this._authService.subject.subscribe(res => this.isAuthorized = !!res);
  }

  ngOnDestroy() {
    if(this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}

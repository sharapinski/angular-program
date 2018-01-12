import { Component, OnInit } from '@angular/core';

import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  isAuthorized: boolean;

  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this.isAuthorized = this._authService.isAuthorized();
  }
}

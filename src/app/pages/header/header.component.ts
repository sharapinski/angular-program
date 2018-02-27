import { Component, Input } from '@angular/core';

import { AuthService } from '../../shared/auth.service';
import { User } from '../../shared/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    @Input() user: User;

    constructor(private _authService: AuthService) {}

    onLogoff() {
      this._authService.logout();
    }
}

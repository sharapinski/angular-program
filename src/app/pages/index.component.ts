import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';

import { Course } from '../shared/course';
import { CourseService } from '../shared/course.service';
import { SearchPipe } from '../shared/search.pipe';
import { AppState } from '../shared/appstate';
import { State } from '../shared/auth.reducer';
import { User } from '../shared/user';

@Component({
  selector: 'index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  user$: Observable<User>;

  constructor(private store: Store<AppState>) {
    this.user$ = store.pipe(select('auth')).pipe(select('user'));
  }
}

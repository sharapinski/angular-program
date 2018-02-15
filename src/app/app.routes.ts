import { Routes } from '@angular/router';

import { IndexComponent } from './pages/index.component';
import { AddCourseComponent } from './pages/addcourse/addcourse.component';
import { NoContentComponent } from './pages/nocontent/nocontent.component';
import { LoginPageComponent } from './pages/login-page.component';
import { CourseListComponent } from './pages/course-list/course-list.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full'},

  { path: 'courses', component: IndexComponent,
    children: [
        { path: '', component: CourseListComponent },
        { path: 'new', component: AddCourseComponent },
        { path: ':id', component: AddCourseComponent }
      ]
  },
  { path: 'courses/:id', component: AddCourseComponent },
  { path: 'courses/new', component: AddCourseComponent},

  { path: 'login', component: LoginPageComponent },

  // 404
  { path: '**', component: NoContentComponent}
]

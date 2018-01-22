import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index.component';
import { HeaderComponent } from './pages/header/header.component';
import { SearchComponent } from './pages/search/search.component';
import { CourseComponent } from './pages/course-list/course/course.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginPageComponent } from './pages/login-page.component';
import { AddCourseComponent } from './pages/addcourse/addcourse.component';


import { CourseService } from './shared/course.service';
import { AuthService } from './shared/auth.service';
import { BorderDirective } from './shared/border.directive';
import { TimePipe } from './shared/time.pipe';
import { SearchPipe } from './shared/search.pipe';
import { OrderByPipe } from './shared/orderby.pipe';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    SearchComponent,
    CourseComponent,
    CourseListComponent,
    FooterComponent,
    LoginComponent,
    LoginPageComponent,
    AddCourseComponent,
    BorderDirective,
    SearchPipe,
    TimePipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    CourseService,
    AuthService,
    SearchPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

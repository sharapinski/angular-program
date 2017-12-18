import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index.component';
import { HeaderComponent } from './pages/header/header.component';
import { SearchComponent } from './pages/search/search.component';
import { CourseComponent } from './pages/course/course.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';

import { CourseService } from './shared/course.service';
import { AuthService } from './shared/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    SearchComponent,
    CourseComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    CourseService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

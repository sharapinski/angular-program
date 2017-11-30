import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { indexComponent } from './pages/index.component';
import { headerComponent } from './pages/header/header.component';
import { searchComponent } from './pages/search/search.component';
import { courseComponent } from './pages/course/course.component';
import { footerComponent } from './pages/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    indexComponent,
    headerComponent,
    searchComponent,
    courseComponent,
    footerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

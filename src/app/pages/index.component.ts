import { Component } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';

import { Course } from '../shared/course';
import { CourseService } from '../shared/course.service';
import { SearchPipe } from '../shared/search.pipe';

@Component({
  selector: 'index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  // courses: Course[] = [];
  // searchValue: string = '';
// page = {current: 0, total: 0};
  // _mainThread: Subscription;
  // page = {current: 0, total: 0};
  // editItem: Course

  constructor() {}

  // ngOnInit() {
  //   this._mainThread = this._service.getList()
  //               .map(res => {
  //                 let page = res.facets && res.facets.pages ? res.facets.pages: null;
  //                 let list = res.courses ? res.courses.filter(item => new Date(item.date).getTime() > new Date().getTime() - 14 * 24 * 60 * 60 * 1000): [];
  //                 return {page, list};
  //               })
  //               .subscribe(obj => {
  //                 if(obj.page) {
  //                   this.page = obj.page;
  //                 }
  //                 this.courses = this.courses.concat(obj.list)
  //               });
  // }

  // onSearch(str: string): void {
  //   this.searchValue = str;
  //   this.courses = [];
  //   this.page.current = 0;
  //   this.onShowMore();
  // }
  //
  // onAddCourse() {
  //   //this.editItem = new Course();
  //   this.editItem = {
  //     id: 0,
  //     title: "",
  //     description: "",
  //     isTopRated: false,
  //     date: new Date(),
  //     // authors: [],
  //     duration: undefined
  //   };
  //   this.showAddCourse = true;
  // }
  //
  // onEdit(event) {
  //   this.editItem = event;
  //   this.showAddCourse = true;
  // }
  //
  // onShowMore() {
  //   this._service.getList(this.searchValue, this.page.current + 1);
  // }
  //
  // onSave() {}
  //
  // onCancel() {
  //   this.showAddCourse = false;
  // }
  //
  // ngOnDestroy() {
  //   if(this._mainThread) {
  //     this._mainThread.unsubscribe();
  //   }
  // }
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Course } from '../shared/course';
import { CourseService } from '../shared/course.service';
import { SearchPipe } from '../shared/search.pipe';

@Component({
  selector: 'index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  courses: Course[] = [];
  searchValue: string = '';
  showAddCourse: boolean = false;
  _mainThread: Subscription;
  page = {current: 0, total: 0};

  constructor(private _service: CourseService) {}

  ngOnInit() {
    this._mainThread = this._service.getList()
                .map(res => {
                  if(res.facets && res.facets.pages) {
                    this.page = res.facets.pages;
                  }
                  let list = res.courses ? res.courses.filter(item => new Date(item.date).getTime() > new Date().getTime() - 14 * 24 * 60 * 60 * 1000): [];
                  return list;
                })
                .subscribe(list => this.courses = this.courses.concat(list));
  }

  onSearch(str: string): void {
    this.searchValue = str;
    this.courses = [];
    this.page.current = 0;
    this.onShowMore();
  }

  onAddCourse() {
    this.showAddCourse = true;
  }

    onShowMore() {
      this._service.getList(this.searchValue, this.page.current + 1);
    }

  onSave() {}

  onCancel() {
    this.showAddCourse = false;
  }

  ngOnDestroy() {
    if(this._mainThread) {
      this._mainThread.unsubscribe();
    }
  }
}

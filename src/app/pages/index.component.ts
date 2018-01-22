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

  constructor(private _service: CourseService) {}

  ngOnInit() {
    this._mainThread = this._service.getList()
                .map(list => list.filter(course => Number(course.date) > new Date().getTime() - 14 * 24 * 60 * 1000))
                .subscribe(courses => this.courses = courses);
  }

  onSearch(str: string): void {
    this.searchValue = str;
  }

  onAddCourse() {
    this.showAddCourse = true;
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

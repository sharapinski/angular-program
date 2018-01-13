import { Component, OnInit } from '@angular/core';

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
  showAddCourse: boolean = true;

  constructor(private _service: CourseService) {}

  ngOnInit() {
    this._service.getList().subscribe(courses => this.courses = courses);
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
}

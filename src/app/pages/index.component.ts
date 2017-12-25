import { Component, OnInit } from '@angular/core';

import { Course } from '../shared/course';
import { CourseService } from '../shared/course.service';
import { SearchPipe } from '../shared/search.pipe';


@Component({
  selector: 'index-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers:[SearchPipe]
})
export class IndexComponent {
  courses: Course[] = [];
  private _pipe: SearchPipe = new SearchPipe();

  constructor(private _service: CourseService) {}

  ngOnInit() {
    this.courses = this._service.getList();
  }

  search(str: string): void {
    this.courses = this._pipe.transform(this._service.getList(), str)
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Course } from '../../shared/course';
import { CourseService } from '../../shared/course.service';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent{
  @Input() courses: Course[];
  @Output() edit = new EventEmitter();

  constructor(private _service : CourseService){}

  onEdit(item: Course) {
    this.edit.emit(item);
  }

  onDelete(item: Course) {
    var result: boolean = confirm("Do you really want to delete this course? ");
    if (result) {
      this._service.removeItem(item);
    }
  }
}

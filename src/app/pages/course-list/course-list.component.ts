import { Component, Input } from '@angular/core';

import { Course } from '../../shared/course';
import { CourseService } from '../../shared/course.service';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent{
  @Input() courses: Course[];

  constructor(private _service : CourseService){}

  onItemDelete(item: Course){
    var result: boolean = confirm("Do you really want to delete this course? ");
    if (result) {
      this._service.removeItem(item);
    }
  }
}

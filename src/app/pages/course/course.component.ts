import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Course } from '../../shared/course';
import { CourseService } from '../../shared/course.service';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input() course: Course;
  //@Output("delete") delete = new EventEmitter();

  constructor(private service : CourseService){}

  onDelete(): void {
    var result: boolean = confirm("Do you really want to delete this course? ");
    if (result) {
        this.service.removeItem(this.course);
    }
  }
}

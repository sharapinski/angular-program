import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Course } from '../../shared/course';
import { CourseService } from '../../shared/course.service';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent{
  @Input() course: Course;
  @Output() delete = new EventEmitter();

  constructor(private _service : CourseService){}

  onDelete(): void {
    this.delete.emit(this.course);
  }
}

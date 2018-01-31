import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Course } from '../../../shared/course';
import { CourseService } from '../../../shared/course.service';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
  @Input() course: Course;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor(private _service : CourseService) {}

  onEdit(): void {
    this.edit.emit(this.course);
  }

  onDelete(): void {
    this.delete.emit(this.course);
  }
}

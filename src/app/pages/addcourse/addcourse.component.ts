import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Course } from '../../shared/course';
@Component({
  selector: 'add-course',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddCourseComponent {
  @Input() item: Course;
  @Output() cancel = new EventEmitter()
  selectedDate: Date

  constructor(){}

  onSave(form): void {
    // this.cancel.emit();
  }

  onCancel(): void {
    this.cancel.emit();
  }
}

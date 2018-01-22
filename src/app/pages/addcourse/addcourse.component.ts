import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-course',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddCourseComponent {
  @Output() cancel = new EventEmitter();

  onCancel(): void {
    this.cancel.emit();
  }
}

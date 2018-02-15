import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Course } from '../../shared/course';
import { CourseService } from '../../shared/course.service';

@Component({
  selector: 'add-course',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.scss']
})
export class AddCourseComponent {
  item: Course;
  selectedDate: Date

  constructor(private _service : CourseService, private router: Router, private route: ActivatedRoute) {
    this.init();
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      if(data.id) {
        this._service.getItemById(data.id)
          .then(item => this.item = item.json());
      } else {
        this.init()
      };
    })
  }

  onSave(form): void {
    // this.cancel.emit();
    let promise = form.id ? this._service.updateItem(this.item) : this._service.createItem(this.item);
    promise.then(res => {
      alert('Save function is finished, but a web-service is unavalble');
      this.router.navigate(['./courses']);
      });
  }

  onCancel(): void {
    // this.cancel.emit();
    this.router.navigate(['./courses']);
  }

  init() {
    this.item = {
        id: 0,
        title: "",
        description: "",
        isTopRated: false,
        date: new Date(),
        // authors: [],
        duration: undefined
      };
  }
}

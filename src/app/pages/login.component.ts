import { Component, OnInit } from '@angular/core';

import { ICourse } from '../shared/icourse';
import { Course } from '../shared/course';
import { CourseService } from '../shared/course.service';


@Component({
  selector: 'courses-page',
  templateUrl: './index.component.html'
})
export class IndexComponent {
  courses: Course[] = [];

  constructor(private service: CourseService){}

  ngOnInit() {
    this.courses = this.service.getList();
  }

  onItemDelete(item: Course): void {
    var index = this.courses.indexOf(item);
    this.courses.splice(index, 1);
  }

  // ngOnInit() {
  //   console.log('courses-page: ngOnInit');
  // }
  //
  // ngOnChanges() {
  //   console.log('courses-page: ngOnChanges');
  // }
  //
  // ngDoCheck() {
  //   console.log('courses-page: ngDoCheck');
  // }
  //
  // ngOnDestroy() {
  //   console.log('courses-page: ngOnDestroy');
  // }
  //
  // ngAfterContentInit() {
  //   console.log('courses-page: ngAfterContentInit');
  // }
  //
  // ngAfterContentChecked() {
  //   console.log('courses-page: ngAfterContentChecked');
  // }
  //
  // ngAfterViewInit() {
  //   console.log('courses-page: ngAfterViewInit');
  // }
  //
  // ngAfterViewChecked() {
  //   console.log('courses-page: ngAfterViewChecked');
  // }

}

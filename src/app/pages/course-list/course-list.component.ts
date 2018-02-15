import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { Course } from '../../shared/course';
import { CourseService } from '../../shared/course.service';

@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent{
  courses: Course[] = [];
  searchValue: string = '';
  page = {current: 0, total: 0};
  _mainThread: Subscription;


  constructor(private _service : CourseService, private router: Router){}

  ngOnInit() {
    this._mainThread = this._service.getList()
                .map(res => {
                  let page = res.facets && res.facets.pages ? res.facets.pages: null;
                  let list = res.courses ? res.courses.filter(item => new Date(item.date).getTime() > new Date().getTime() - 14 * 24 * 60 * 60 * 1000): [];
                  return {page, list};
                })
                .subscribe(obj => {
                  if(obj.page) {
                    this.page = obj.page;
                  }
                  this.courses = this.courses.concat(obj.list)
                });
  }

  onDelete(item: Course) {
    var result: boolean = confirm("Do you really want to delete this course? ");
    if (result) {
      this._service.removeItem(item.id)
                    .then(res => this.onSearch(this.searchValue));
    }
  }

    onSearch(str: string): void {
      this.searchValue = str;
      this.courses = [];
      this.page.current = 0;
      this.onShowMore();
    }

    onAddCourse() {
      this.router.navigate(['./courses/new']);
    }

    onEdit(event) {
      this.router.navigate(['./courses', event.id]);
    }

    onShowMore() {
      this._service.getList(this.searchValue, this.page.current + 1);
    }
}

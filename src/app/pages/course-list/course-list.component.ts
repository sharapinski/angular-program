import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Course } from '../../shared/course';
import { CourseService } from '../../shared/course.service';
import { AppState } from '../../shared/appstate';
import { State, Init } from '../../shared/course.reducer';
@Component({
  selector: 'course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit, OnDestroy{
  courses$: Observable<Course[]>;
  page$: Observable<{current: number, total: number}>;
  searchValue: string = '';
  subscription: Subscription;
  pageCurrent: number;


  constructor(private _service : CourseService, private router: Router, private store: Store<AppState>){
    this.courses$ = store.pipe(select('courselist')).pipe(select('courses'));
    this.page$ = store.pipe(select('courselist')).pipe(select('page'));
  }

  ngOnInit() {
    this.subscription = this.page$.subscribe(page => this.pageCurrent = page.current);
    this._service.getList();
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
      this.store.dispatch(new Init());
      this.onShowMore();
    }

    onAddCourse() {
      this.router.navigate(['./courses/new']);
    }

    onEdit(event) {
      this.router.navigate(['./courses', event.id]);
    }

    onShowMore() {
      this._service.getList(this.searchValue, this.pageCurrent + 1);
    }


    ngOnDestroy() {
      if(this.subscription) {
        this.subscription.unsubscribe()
      }
    }
}

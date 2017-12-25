import { Injectable } from '@angular/core';

import { courses } from './data';
import { Course } from './course';

@Injectable()
export class CourseService {
  courses: Course[] = courses;

  getList(): Course[] {
    return this.courses;
  }

  createItem(id, title, duration, date, description) {
    let item = {id, title, duration, date, description};
    this.courses.push(item);
  }

  getItemById(id: number): Course {
    let item : number;
    for(let i in this.courses) {
      if(this.courses[i].id === id) {
        return this.courses[i];
      }
    }

    return null;
  }

  updateItem(item: Course) {
    for(let i in this.courses) {
      if(this.courses[i].id === item.id) {
        this.courses[i] = item;
        break;
      }
    }
  }

  removeItem(item: Course) {
    let index = this.courses.indexOf(item);
    if(index > -1) {
      this.courses.splice(index, 1);
    }
  }
}

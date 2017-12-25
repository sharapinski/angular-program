import { Injectable } from '@angular/core';

import { courses } from './data';
import { Course } from './course';

@Injectable()
export class CourseService {
  courses: any[] = courses;

  getList(): any[] {
    return this.courses;
  }

  createItem(id, title, duration, date, description) {
    let item = {id: id, title: title, duration: duration, date: date, description: description};
    this.courses.push(item);
  }

  getItemById(id: number): any {
    let item : number;
    for(let i in this.courses) {
      if(this.courses[i].id === id) {
        return this.courses[i];
      }
    }

    return null;
  }

  updateItem(item: any) {
    for(let i in this.courses) {
      if(this.courses[i].id === item.id) {
        this.courses[i] = item;
        break;
      }
    }
  }

  removeItem(item: any) {
    let index = this.courses.indexOf(item);
    if(index > -1) {
      this.courses.splice(index, 1);
    }
  }
}

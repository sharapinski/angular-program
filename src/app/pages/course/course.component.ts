import { Component } from '@angular/core';
import { ICourse } from './ICourse';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class courseComponent implements ICourse{
  title: string;
  order: number;
  duration: Date;
  date: Date;
  description: string;

  getTitle(): string {
    return this.title;
  };
  setTitle(title: string): courseComponent {
    this.title = title;
    return this;
  };

  getOrder(): number {
    return this.order;
  };
  setOrder(order: number): courseComponent {
    this.order = order;
    return this;
  };

  getDuration(): Date {
    return this.duration;
  };
  setDuration(duration: Date): courseComponent {
    this.duration = duration;
    return this;
  };

  getDate(): Date {
    return this.date;
  };
  setDate(date: Date): courseComponent {
    this.date = date;
    return this;
  };

  getDescription(): string{
    return this.description;
  };
  setDescription(description: string): courseComponent {
    this.description = description;
    return this;
  };
}

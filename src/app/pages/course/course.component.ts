import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from './ICourse';


@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements ICourse{
  @Input('id') id: number;
  @Input('title') title: string;
  @Input('duration') duration: number;
  @Input('date') creationDate: string;
  @Input('description') description: string;

  @Output("delete") delete = new EventEmitter();

  constructor(){
    console.log(`course ${this.id}: constructor`);
  }

  onDelete(): void {
    this.delete.emit({
      item: this
    })
  }

  getId(): number {
    return this.id;
  }

  getTitle(): string {
    return this.title;
  }
  setTitle(title: string): CourseComponent {
    this.title = title;
    return this;
  }

  getDuration(): number {
    return this.duration;
  }

  setDuration(duration: number): CourseComponent {
    this.duration = duration;
    return this;
  }

  getCreationDate(): string {
    return this.creationDate;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(description: string): CourseComponent {
    this.description = description;
    return this;
  }


  ngOnInit() {
    console.log(`course ${this.id}: ngOnInit`);
  }

  ngOnChanges() {
    console.log(`course ${this.id}: ngOnChanges`);
  }

  ngDoCheck() {
    console.log(`course ${this.id}: ngDoCheck`);
  }

  ngOnDestroy() {
    console.log(`course ${this.id}: ngOnDestroy`);
  }
  //
  // ngAfterContentInit() {
  //   console.log(`course ${this.id}: ngAfterContentInit`);
  // }
  //
  // ngAfterContentChecked() {
  //   console.log(`course ${this.id}: ngAfterContentChecked`);
  // }
  //
  // ngAfterViewInit() {
  //   console.log(`course ${this.id}: ngAfterViewInit`);
  // }
  //
  // ngAfterViewChecked() {
  //   console.log(`course ${this.id}: ngAfterViewChecked`);
  // }

}

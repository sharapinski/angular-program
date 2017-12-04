import { Component, OnInit } from '@angular/core';
import { ICourse } from './course/ICourse';

const courses: ICourse[] = [
  {
    id: 1,
    title: "Course 1",
    duration: 22,
    creationDate: '1498424623006',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor, dolor semper consequat viverra, ipsum justo iaculis ipsum, quis congue nunc nibh ac ante. Quisque tempor nunc turpis, eu dignissim magna placerat id. Mauris sit amet ligula a est ultrices tincidunt. Maecenas fermentum urna odio, ut congue diam ullamcorper ac. Phasellus sodales fringilla lobortis. Proin urna libero, lacinia et facilisis in, sagittis nec metus. Nam tincidunt auctor lacus."
  },
  {
    id: 2,
    title: "Course 2",
    duration: 10,
    creationDate: '1499473623006',
    description: "Phasellus sagittis nunc quis ex mollis, at maximus risus auctor. Vestibulum bibendum elementum felis, tincidunt aliquam magna malesuada sed. Duis semper sollicitudin arcu quis sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum feugiat, mi ac dignissim egestas, lacus tellus pellentesque diam, id ultricies sapien leo et justo. Praesent id ornare dolor."
  },
  {
    id: 3,
    title: "Course 3",
    duration: 80,
    creationDate: '1500473623006',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pharetra, odio eu consectetur tristique, turpis risus facilisis nunc, et finibus sapien justo a mauris."}
];


@Component({
  selector: 'courses-page',
  templateUrl: './index.component.html'
})
export class IndexComponent {
  courses: ICourse[] = courses;

  constructor(){
    console.log('courses-page: constructor');
  }

  onItemDelete(item): void {
    console.log('Course #{0} was removed'.replace('{0}', item.id));
    var index = this.courses.indexOf(item);
    this.courses.splice(index, 1);
  }

  ngOnInit() {
    console.log('courses-page: ngOnInit');
  }

  ngOnChanges() {
    console.log('courses-page: ngOnChanges');
  }

  ngDoCheck() {
    console.log('courses-page: ngDoCheck');
  }

  ngOnDestroy() {
    console.log('courses-page: ngOnDestroy');
  }
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

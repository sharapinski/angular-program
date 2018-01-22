import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchValue: string = "";
  @Output() search = new EventEmitter();
  @Output() addCourse = new EventEmitter();

  onSearch(): void {
    this.search.emit(this.searchValue);
  }

  onAddCourse(): void {
    this.addCourse.emit();
  }
}

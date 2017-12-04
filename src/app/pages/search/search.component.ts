import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Input('searchValue') searchValue: string = "";
  @Output('search') search = new EventEmitter();

  onSearch(): void {
    console.log(this.searchValue);
    this.search.emit({
      searchValue: this.searchValue
    })
  }
}

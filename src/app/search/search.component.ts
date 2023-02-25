import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = "";

  @Output()
  onSearchTextChanged: EventEmitter<string> = new EventEmitter<string>()
  
  onInputChanged() {
    this.onSearchTextChanged.emit(this.searchText);
  }
}

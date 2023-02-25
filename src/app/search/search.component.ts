import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  
  // Two way data binding allows us to set a property that always reflect for the value either from class component to template or vice versa without event binding
  searchValue: string = "Hello World"

}

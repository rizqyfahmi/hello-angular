import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input('total') all: number = 0; // "total" is an alias
  @Input() free: number = 0;
  @Input() premium: number = 0;

  selectedValue: string = "All";

  @Output()
  onFilterChanged: EventEmitter<string> = new EventEmitter<string>();

  // It used to trigger "onFilterChanged" as the output of this component
  onRadioChanged() {
    this.onFilterChanged.emit(this.selectedValue);
  }
}

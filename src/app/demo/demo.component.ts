import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck {
  @Input() value: string = "Initial Value";

  /**
   * - It's not part of angular lifecycle, It's a feature from javascript/typescrypt
   * - Constructor will be executed at first time when class component is run (before angular lifecycle)
   */
  constructor() {
    console.log("- constructor called!");
    console.log("  Value: ", this.value);
  }

  /**
   * - ngOnChanges gets fired before ngOnInit (if @input property value has changed for the first time this component is run) and every @input property value is updated
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log("- ngOnChanges called!");
    console.log("  Value: ", this.value);
    console.log("  Changes: ", changes);
  }

  /**
   * - ngOnInit gets fired only once just after the default change detector has checked for the first time
   */ 
  ngOnInit(): void {
    console.log("- ngOnInit called!");
    console.log("  Value: ", this.value);
  }

  /**
   * - ngDoCheck gets called when every event or change happens
   */ 
  ngDoCheck(): void {
    console.log("- ngDoCheck called!");
    console.log("  Value: ", this.value);
  }
}

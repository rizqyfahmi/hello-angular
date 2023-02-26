import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Input() value: string = "";

  /**
   * - It's not part of angular lifecycle, It's a feature from javascript/typescrypt
   * - Constructor will be executed at first time when class component is run (before angular lifecycle)
   */
  constructor() {
    console.log("- constructor called!");
    console.log("  Value: ", this.value);
  }

  /**
   * - ngOnInit gets fired only once just after the default change detector has checked for the first time
   */ 
  ngOnInit(): void {
    console.log("- ngOnInit called!");
    console.log("  Value: ", this.value);
  }
}

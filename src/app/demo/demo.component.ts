import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  @Input() value: string = "Initial Value";

  /**
   * - It's not part of angular lifecycle, It's a feature from javascript/typescrypt
   * - Constructor will be executed at first time when class component is run (before angular lifecycle)
   */
  constructor() {
    console.log("- Constructor called!");
    console.log("  Value: ", this.value);
  }
}

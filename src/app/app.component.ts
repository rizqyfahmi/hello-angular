import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Emulated is the default value
})
export class AppComponent {
  title: string = ""
}

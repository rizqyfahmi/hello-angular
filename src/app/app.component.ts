import { Component } from '@angular/core';
import { EnrollService } from './services/enroll/enroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  /**
   * - Once we provide a service on a component, the angular framework will create and inject an instance 
   *   of that service for that component and all its child components
   * */
  providers: [EnrollService]
})
export class AppComponent {
  title = 'hello-angular';
}

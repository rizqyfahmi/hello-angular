import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'],
  providers: [EnrollService]
})
export class AngularComponent {
  title: string = "Angular";

  /**
   * - Once we provide a dependency injection for EnrollService here (in "providers")
   *   it will overide the instance of EnrollService that is injected on AppModule
   * */
  constructor(private enrollService: EnrollService) {}

  onEnroll() {
    this.enrollService.onEnrollClicked(this.title);
  }
}

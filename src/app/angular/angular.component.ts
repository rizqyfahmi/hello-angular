import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent {
  title: string = "Angular";

  onEnroll() {
    const enrollService = new EnrollService()
    enrollService.onEnrollClicked(this.title);
  }
}

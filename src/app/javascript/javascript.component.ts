import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll/enroll.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent {
  title: string = "Javascript";

  onEnroll() {
    const enrollService = new EnrollService()
    enrollService.onEnrollClicked(this.title);
  }
}

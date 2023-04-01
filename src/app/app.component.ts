import { Component, OnInit } from '@angular/core';
import { StudentService } from './services/student.service';
import { Student } from './types/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular';

  onSubmit(form: HTMLFormElement) {
    console.log(form)
  }
}

import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular';
  defaultCountry = 'india';
  firstname: string = '';
  lastname: string = '';
  @ViewChild('myForm') form?: NgForm;

  onSubmit() {
    console.log(this.form)
  }
}

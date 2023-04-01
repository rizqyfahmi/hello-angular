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
  defaultGender: string = "Female";
  genders: { id: string, value: string }[] = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Other' },
  ];

  @ViewChild('myForm') form?: NgForm;

  onSubmit() {
    console.log(this.form)
  }
}

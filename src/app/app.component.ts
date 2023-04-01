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
  email: string = '';
  country: string = '';
  gender: string = '';
  defaultGender: string = "Female";
  genders: { id: string, value: string }[] = [
    { id: '1', value: 'Male' },
    { id: '2', value: 'Female' },
    { id: '3', value: 'Other' },
  ];

  @ViewChild('myForm') form?: NgForm;

  onSubmit() {
    console.log(this.form);

    this.firstname = this.form?.value.personalDetails.firstname;
    this.lastname = this.form?.value.personalDetails.lastname;
    this.email = this.form?.value.personalDetails.email;
    this.gender = this.form?.value.gender;
    this.country = this.form?.value.country;

    this.form?.reset();

  }

  setDefaultValues() {
    /**
     * - Using "patchValue" we can set value for specific property without need to set value of all properties 
     */
    this.form?.form.patchValue({
      personalDetails: {
        firstname: 'John',
        lastname: 'Smith',
        email: 'john.smith@email.com'
      }
    })
  }
}

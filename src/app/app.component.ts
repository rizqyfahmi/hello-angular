import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Reactive Form';
  reactiveFormProps?: FormGroup;

  ngOnInit(): void {
    this.reactiveFormProps = new FormGroup({
      personalDetails: new FormGroup({
        firstname: new FormControl(null, Validators.required), // "null" is its default value
        lastname: new FormControl(null, Validators.required), // "null" is its default value
        email: new FormControl(null, [Validators.required, Validators.email]), // "null" is its default value
      }),
      gender: new FormControl('male'), // "male" is its default value
      country: new FormControl('usa'), // "usa" is its default value
      hobbies: new FormControl(null), // "null" is its default value
    });
  }

  onSubmit() {
    console.log(this.reactiveFormProps);
  }

}

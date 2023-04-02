import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
        firstname: new FormControl(null, [Validators.required, this.noSpaceAllowed]), // "null" is its default value
        lastname: new FormControl(null, Validators.required), // "null" is its default value
        email: new FormControl(null, {
          validators: [Validators.required, Validators.email],
          asyncValidators: [this.emailNotAllowed()],
          updateOn: 'blur'
        }), // "null" is its default value
      }),
      gender: new FormControl('male'), // "male" is its default value
      country: new FormControl('usa'), // "usa" is its default value
      hobbies: new FormControl(null), // "null" is its default value
      /** 
       * - FormArray is the other way to manage a collection of form controls using array as its parameter
       * - It has same with FormGroup, buat each control is represented as key-value pair
       * */ 
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ]),
    });

    // ValueChanges event is called whenever the value of FormControl, FormGroup, or FormArray changes.
    this.reactiveFormProps.get('personalDetails.firstname')?.valueChanges.subscribe((value) => {
      console.log('value: ', value)
    })
  }

  onSubmit() {
    console.log(this.reactiveFormProps);
  }

  addSkills() {
    const skills = <FormArray>this.reactiveFormProps?.get('skills');
    skills.push(new FormControl(null, Validators.required))
  }

  // Custom validator
  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true }
    }

    return null;
  }

  emailNotAllowed(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<any> | Observable<any> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (control.value !== 'hello@email.com') {
            return resolve({ emailNotAllowed: true })
          }

          resolve(null);
        }, 5000);
      })
    }
  }

  get formSkills() { return <FormArray>this.reactiveFormProps?.get('skills'); }

}

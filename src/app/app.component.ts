import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
    ViewChild is a way to pass element reference from view template into its class
  */
  // "dobInput" is a template reference variable
  @ViewChild('dobInput') dateOfBirth!: ElementRef;
  // "ageInput" is a template reference variable
  @ViewChild('ageInput') age!: ElementRef;

  onCalculateAge() {
    const value = this.dateOfBirth.nativeElement.value;
    if (!value) return;

    const birthYear = new Date(value).getFullYear()
    const currentYear = new Date().getFullYear();

    this.age.nativeElement.value = currentYear - birthYear;
    
  }
}

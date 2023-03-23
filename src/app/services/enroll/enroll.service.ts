import { Injectable } from '@angular/core';

export class EnrollService {

  constructor() {}

  onEnrollClicked(title: string) {
    alert('Thank you for enrolling to ' + title + ' course.');
  } 
}

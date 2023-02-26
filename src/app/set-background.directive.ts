import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetBackground]'
})
export class SetBackgroundDirective {

  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = "#537FE7";
  }

}

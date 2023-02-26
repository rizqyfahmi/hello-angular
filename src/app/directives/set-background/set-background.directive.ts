import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetBackground]'
})
export class SetBackgroundDirective implements OnInit {

  private element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = "#537FE7";
  }

}

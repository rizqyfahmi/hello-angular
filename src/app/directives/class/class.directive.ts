import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // When @Input alias is set, then we can't use "display"
  @Input("appClass") set display(value: Object) {
    const entries = Object.entries(value);
    for(let [className, condition] of entries) {
      if (condition) {
        this.renderer.addClass(this.element.nativeElement, className);
      }
    }
  }
}
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // Actually "styleProps" is a property, it acts like a method because of "set"
  @Input("appStyle") set styleProps(style: Object) {
    const entries = Object.entries(style);
    for( let [key, value] of entries) {
      this.renderer.setStyle(this.element.nativeElement, key, value)
    }
  }

}

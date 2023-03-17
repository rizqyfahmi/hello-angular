import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding("style.backgroundColor")
  background: string = "yellow"

  @HostListener("mouseenter")
  mouseenter() {
    this.background = "pink";
  }

  @HostListener("mouseleave")
  mouseleave() {
    this.background = "yellow"
  }

}

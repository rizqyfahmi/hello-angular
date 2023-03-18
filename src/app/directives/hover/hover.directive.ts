import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter") 
  onmouseover() {
    this.renderer.setAttribute(this.element.nativeElement, "class", "container p-3")
    this.renderer.setStyle(this.element.nativeElement, "transition", "0.5s");
  }

  @HostListener("mouseleave") 
  onmouseout() {
    this.renderer.setAttribute(this.element.nativeElement, "class", "container p-2")
    this.renderer.setStyle(this.element.nativeElement, "transition", "0.5s");
  }
}

import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

    /**
     * Why we need Renderer2?
     * - Angular synchroizes the component class and the view using data binding & change detectiong, etc.
     *   All of them are bypassed when we update the DOM directly
     * - DOM manipulation works only in browser
     * - The DOM APIs do not sanitize the data. Hence it is possible to inject a script, make it becomes an easy target for the XXS injection attack
     * - Renderer2 doesn't manipulates DOM directly
     * */ 
    constructor(
      private element: ElementRef, // It's a shorthand to create "element" property
      private renderer: Renderer2 // It's a shorthand to create "renderer" property
    ) { }
  
    ngOnInit(): void {
      this.renderer.setStyle(this.element.nativeElement, "backgroundColor", "#E96479");
      this.renderer.addClass(this.element.nativeElement, "p-2");
      this.renderer.setAttribute(this.element.nativeElement, "title", "This is an example");
    }
}

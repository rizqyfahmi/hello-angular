import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // "@input" make "defaultColor" is assignable from the host element by using [defaultColor] = ""
  @Input() defaultColor: string = "transparent";
  // "@input" make "highlightColor" is assignable from the host element by using [highlightColor] = ""
  @Input() highlightColor: string = "pink";

  ngOnInit(): void {
    /**
     * - "defaultColor" is transparent as the default,
     *   the new value of "defaultColor" that is assigned from the host element is available when it is initialized. 
     *   So, we need to assign the value here 
     * */
    this.background = this.defaultColor;
  }

  @HostBinding("style.backgroundColor")
  background: string = this.defaultColor;

  @HostListener("mouseenter")
  mouseenter() {
    this.background = this.highlightColor;
  }

  @HostListener("mouseleave")
  mouseleave() {
    this.background = this.defaultColor;
  }

}

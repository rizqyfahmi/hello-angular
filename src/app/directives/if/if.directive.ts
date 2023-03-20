import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(
    private template: TemplateRef<any>, // The view that has this structural directive
    private viewContainer: ViewContainerRef // Wrapper (behind the scene, the structural directive create a markup ng-template that wraps the view. Therefore we need to add asterick symbol(*) in front of directive to tell angular to create ng-template)
  ) { }

  @Input("appIf") set displayView(isNeedToBeDisplay: boolean) {
    if (isNeedToBeDisplay) {
      // Put the view inside the wrapper
      this.viewContainer.createEmbeddedView(this.template)
    } else {
      this.viewContainer.clear();
    }
  }
}

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom // ShadowDom make this component is not affected by global css (styles.css) because it creates a ShadowRoot for the component's host element which is then used to encapsulate all the Component's styling
})
export class Comp2Component {

}

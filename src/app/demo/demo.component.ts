import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() value: string = "Initial Value";

  /**
   * - It's not part of angular lifecycle, It's a feature from javascript/typescrypt
   * - Constructor will be executed at first time when class component is run (before angular lifecycle)
   */
  constructor() {
    console.log("- constructor called!");
    console.log("  Value: ", this.value);
  }

  /**
   * - ngOnChanges gets fired before ngOnInit (if @input property value has changed for the first time this component is run) and every @input property value is updated
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log("- ngOnChanges called!");
    console.log("  Value: ", this.value);
    console.log("  Changes: ", changes);
  }

  /**
   * - ngOnInit gets fired only once just after the default change detector has checked for the first time
   */ 
  ngOnInit(): void {
    console.log("- ngOnInit called!");
    console.log("  Value: ", this.value);
  }

  /**
   * - ngDoCheck gets called when every event or change happens
   */ 
  ngDoCheck(): void {
    console.log("- ngDoCheck called!");
    console.log("  Value: ", this.value);
  }

  /**
   * - ngAfterContentInit gets called only once when projected content (ng-content) has been fully initialized
   */ 
  ngAfterContentInit(): void {
    console.log("- ngAfterContentInit called!");
    console.log("  Value: ", this.value);
  }

  /**
   * - ngAfterContentChecked gets called whenever projected content (ng-content) has completed checking
   */ 
  ngAfterContentChecked(): void {
    console.log("- ngAfterContentChecked called!");
    console.log("  Value: ", this.value);
  }

  /**
   * - ngAfterViewInit gets invoked when the component view and all its child views are fully initialzied
   * - It only gets called only once
   */ 
  ngAfterViewInit(): void {
    console.log("- ngAfterViewInit called!");
    console.log("  Value: ", this.value);
  }

  /**
   * - ngAfterViewChecked gets invoked after the default change detector has completed one change-check cycle for a component's view
   */ 
  ngAfterViewChecked(): void {
    console.log("- ngAfterViewChecked called!");
    console.log("  Value: ", this.value);    
  }

  /**
   * - ngOnDestroy gets invoked just before the component or directive gets destroyed
   */ 
  ngOnDestroy(): void {
    console.log("- ngOnDestroy called!");
    console.log("  Value: ", this.value);    
  }
}

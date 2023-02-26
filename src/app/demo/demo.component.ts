import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, AfterContentInit {

  // ContentChild is used to access an element inside ng-content that comes from the parent component using its template reference variable
  @ContentChild("paragraph") paragraphElement?: ElementRef;

  ngOnInit(): void {
    // It will get nothing (undefined) because ng-content is fully initialized on ngAfterContentInit
    console.log("- ngOnInit: ");
    console.log(this.paragraphElement);
  }

  ngAfterContentInit(): void {
    console.log("- ngAfterContentInit: ");
    console.log(this.paragraphElement?.nativeElement.textContent);
    
    // Prevent update data when "paragraphElement" is null
    if (!this.paragraphElement) return;
    // Update "#paragraph" content
    this.paragraphElement!.nativeElement.textContent = "This is new paragraph value"
  }
}

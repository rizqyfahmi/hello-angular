import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private route: Router) {}

  navigateToHome() {
    /**
     * - By default, navigate uses absolute route paths
     * - We need to pass an array of path as its argument
     * */
    this.route.navigate(["Home"]);
  }

}

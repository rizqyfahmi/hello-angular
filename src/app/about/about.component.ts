import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(private route: Router, private activatedRoute: ActivatedRoute) {}

  navigateToHome() {
    /**
     * - By default, navigate uses absolute route paths
     * - Make "navigate" to be relative route
     * */
    this.route.navigate(["Home"], { relativeTo: this.activatedRoute }); // http://localhost:4200/About/Home
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hello-angular';
  displayLoadingIndicator: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private route: Router) {}
  
  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value) => {
      document.getElementById(value!)?.scrollIntoView({ behavior: 'smooth' })
    });

    this.route.events.subscribe((routerEvent: Event) => {
      // Since we create a "resolve route guard", then we need to show loading bar when visit a page
      if (routerEvent instanceof NavigationStart) {
        this.displayLoadingIndicator = true;
      }
      
      if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
        this.displayLoadingIndicator = false;
      }
    })
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}

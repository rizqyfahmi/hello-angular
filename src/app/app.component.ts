import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hello-angular';

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) {}
  
  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value) => {
      document.getElementById(value!)?.scrollIntoView({ behavior: 'smooth' })
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

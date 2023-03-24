import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'User Service';

  constructor(private userService: UserService) {}

  users: { name: string, status: string }[] = [];

  ngOnInit(): void {
    this.users = this.userService.users;
  }
}

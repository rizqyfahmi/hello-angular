import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../types/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  constructor(private userService: UserService) {}
  
  users: User[] = [];

  ngOnInit(): void {
    this.users = this.userService.users;
  }

  showDetail(user: User) {
    this.userService.showUserDetail(user);
  }
}

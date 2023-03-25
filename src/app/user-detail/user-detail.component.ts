import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../types/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private userService: UserService) {}
  
  user?: User;

  ngOnInit(): void {
    this.userService.onShowDetailClicked.subscribe((data: User) => {
      this.user = data;
    })
  }

}

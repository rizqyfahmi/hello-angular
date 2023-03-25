import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

type video = {
  title: string,
  share: number,
  likes: number,
  dislikes: number,
  thumbnail: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Service';
}

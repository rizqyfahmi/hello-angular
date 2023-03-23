import { Component } from '@angular/core';
import { EnrollService } from './services/enroll/enroll.service';

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
  styleUrls: ['./app.component.css'],
  /**
   * - Once we provide a service on a component, the angular framework will create and inject an instance 
   *   of that service for that component and all its child components
   * */
  providers: [EnrollService]
})
export class AppComponent {
  title: string = 'Custom Directive';
  display: boolean = false;
  occupation: string = "teacher";
  videos: video[] = [
    { title: "My video 1", share: 415, likes: 257, dislikes: 12, thumbnail: "https://placehold.co/600x400/F99417/FFF" },
    { title: "My video 2", share: 215, likes: 325, dislikes: 12, thumbnail: "https://placehold.co/600x400/5D3891/FFF" },
    { title: "My video 3", share: 513, likes: 105, dislikes: 12, thumbnail: "https://placehold.co/600x400/00ABB3/FFF" }
  ];
  getMostLikesVideo = () => {
    const result: video = [...this.videos].sort((current: video, next: video) => next.likes - current.likes)[0]
    return result;
  }
  mostLikedVideo: video = this.getMostLikesVideo()
  displayToggle() {
    this.display = !this.display;
  }
}

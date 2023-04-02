import { Component } from '@angular/core';

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
  title: string = 'hello-angular';
  inputText: string = "";

  onSubmit(inputElement: HTMLInputElement) {
    this.inputText = inputElement.value;
  }
}

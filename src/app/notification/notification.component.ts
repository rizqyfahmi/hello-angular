import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeOut: isHidden}">
              <p>This website uses cookie to provide better user experience.</p>
              <div class="close"><button class="btn" (click)="onCloseNotification()">X</button></div>
            </div>`,
  styles: [
    ".notification { margin: 10px 0px; padding: 10px 20px; background-color: #B4E4FF; text-align: center; }", 
    "p { font-size: 14px; margin: 0px }",
    ".close { position: absolute; right: 15px; top: 50%; transform: translateY(-50%); }",
    ".fadeOut { visibility: hidden; opacity: 0; transition: visibility 0s 2s; opacity: 2s linear; }"
  ] 
})
export class NotificationComponent {
  
  isHidden: boolean = false;

  onCloseNotification() {
    this.isHidden = true;
  }

}

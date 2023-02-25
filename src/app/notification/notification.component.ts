import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success">
              <p>This website uses cookie to provide better user experience.</p>
            </div>`,
  styles: [".notification { margin: 10px 0px; padding: 10px 20px; background-color: #B4E4FF; text-align: center; }", "p { font-size: 14px }"] 
})
export class NotificationComponent {

}

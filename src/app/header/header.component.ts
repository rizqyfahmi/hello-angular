import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  slogan: string = "This is a new slogan for this web application"
  source: string = "./assets/5274051.jpg"
  
  getSlogan() {
    return this.slogan
  }

}

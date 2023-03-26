import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hello-angular';

  constructor(private activatedRoute: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value) => {
      document.getElementById(value!)?.scrollIntoView({ behavior: 'smooth' })
    })
  }

}

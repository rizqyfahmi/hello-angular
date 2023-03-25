import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Observable';

  /**
   * - Create an observable that emits sequential numbers every specified time interval
   * - The observable created by this interval function will keep on emitting the data indefinitely unless we unsubscribe that observable
   * */ 
  myObservable = interval(1000)
  subscribedObservable?: Subscription;

  ngOnInit(): void {
    this.subscribe();
  }

  // It will create a new observable every time we call this method, even if we already have an active observable.
  subscribe() {
    this.subscribedObservable = this.myObservable.subscribe((value) => {
      console.log(value);
    });
  }

  // It will stop subscription. (Only the latest observable, so that we need to prevent creating multiple observable)
  unsubscribe() {
    this.subscribedObservable?.unsubscribe();
  }
}

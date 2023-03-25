import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observable';

  /**
   * - Javascript is a single-threaded programming language.
   * - To handle asynchronous operation in js, we can using either promise or observable
   * - Promise:
   *    - It provides us the data once the complete/all data is ready.
   *    - It will certainly give us the data even if there is no one using that data.
   *    - It is native feature. It's provided by Javascript
   * - Observable: 
   *    - It will not wait for the complete/all data to be available. an observable streams the data. 
   *      It will send the data in packets (some of the data), when the data is available then it will send the data.
   *    - It will only provide the data if there is someone which use that data. If there is no one which use that data, 
   *      an observable will not send that data
   *    - It's provided by Javascript library which is called as rxjs
   * */
  myObservable = new Observable((observer) => {
    console.log("Observable starts");
    setTimeout(() => observer.next(1), 1000);
    setTimeout(() => observer.next(2), 2000);
    setTimeout(() => observer.next(3), 3000);
    setTimeout(() => observer.next(4), 4000);
    setTimeout(() => observer.next(5), 5000);
  });

  ngOnInit(): void {
    /**
     * - It has three optional callback functions, such as: next, error, complete
     * - next: it gets executed everytime this next method returns a value (whenever the subscriber gets a value from observer)
     * */
    this.myObservable.subscribe((value) => {
      console.log(value);
    })
  }

}

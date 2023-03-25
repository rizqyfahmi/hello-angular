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
   * - It similar to creating an observable using the observable construtor
   * - It's deprecated (Not recomeded to use)
   * */
  myObservable = Observable.create((observer: any) => {
    console.log("Observable starts");
    setTimeout(() => observer.next(1), 1000);
    setTimeout(() => observer.next(2), 2000);
    setTimeout(() => observer.next(3), 3000);
    setTimeout(() => observer.next(4), 4000);
    setTimeout(() => observer.next(5), 5000);
    setTimeout(() => observer.error(new Error("Something went wrong! Please try again letter!")), 6000);
    // setTimeout(() => observer.complete(), 6000);
    setTimeout(() => observer.next(6), 7000); // It will not be emitted because of complete signal is already sent
  });

  ngOnInit(): void {
    /**
     * - It has three optional callback functions, such as: next, error, complete
     * - next: it gets executed everytime this next method returns a value (whenever the subscriber gets a value from observer)
     * - error: it gets executed when an error signal is sent from observer. If the signal is sent, then observer will not send/emit all event after that
     * - complete: it gets executed when a complete signal is sent from observer. If the signal is sent then the observer will not send/emitted all events after that.
     * */
    this.myObservable.subscribe({
      next: (value: any) => {
        console.log(value);
      },
      error: (error: { message: any; }) => {
        console.log(error.message);
      },
      complete: () => {
        console.log("Observable has complete emitting all values.");
      }
    })
  }

}

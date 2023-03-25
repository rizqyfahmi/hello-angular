import { Component, OnInit } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observable';

  arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  /**
   * - Operators are used to transform the data is emitted by an observable, then that operator returns a new observable with the transformed data
   * - Operator is a function that takes an observable as its input and returns another observable.
   * - Pipe is used to combine/chain multiple operators
   * */
  myObservable = from(this.arrOne).pipe(
    // Map will returns a new observable with the transformed data
    map((value) => {
      return value * 5;
    }),
    // Filter will returns a new observable with the filtered data
    filter((value) => {
      return value >= 30;
    })
  );

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

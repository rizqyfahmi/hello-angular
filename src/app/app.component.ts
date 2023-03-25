import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observable';

  arrOne = [1, 2, 3, 4];
  /**
   * - We only can pass a single iterable argument (array, etc.)
   * - We can't execute block of code as we can do when we use "new Observable"
   * - It will emit each of the values inside the iterable argument (it emits the value, one by one from that iterable argument)
   * - The complete signal is handled by "from"
   * */
  myObservable = from(this.arrOne);

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

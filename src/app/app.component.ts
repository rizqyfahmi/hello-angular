import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observable';

  arrOne = [1, 2, 3, 4];
  arrTwo = ["A", "B", "C", "D"];
  /**
   * - We only can pass any number of arguments. Those arguments will be emitted as the data from that observable
   * - We can't execute block of code as we can do when we use "new Observable"
   * - The complete signal is handled by "of"
   * */
  myObservable = of(this.arrOne, this.arrTwo, 27, "Hello");

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

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  /**
   * - Subject is a special type of Observable that allows values to be multicasted to many Observers.
   * - Subjects are like EventEmitters but needs to unsubscribe to in the onDestroy lifecycle hook, whereas EventEmitter gets cleaned up automatically.
   * - Subject is used to notify about an event to an observer, but an EventEmitter should only be used to notify an event from the child 
   *   to the parent i.e., it should only be used with @Output().
   * */ 
  dataEmitter = new Subject<string>();

  onEmitEvent(data: string) {
    this.dataEmitter.next(data);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  logMessage(name: string, status: string) {
    console.log(`A new user with username ${name} and status ${status} has been added.`)
  }

}
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    { name: "John", status: "active" },
    { name: "Mark", status: "inactive" },
    { name: "Steve", status: "active" },
  ]

  constructor(private logger: LoggerService) {}

  AddNewUser(name: string, status: string) {
    this.users.push({ name: name, status: status });
    this.logger.logMessage(name, status);
  }
}

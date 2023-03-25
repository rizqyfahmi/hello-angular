import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [
    { name: 'John', job: 'Teacher', gender: 'Male', country: 'United States', age: 35, avatar: 'https://placehold.co/120x120/EA5455/FFF' },
    { name: 'Mark', job: 'Designer', gender: 'Male', country: 'Germany', age: 35, avatar: 'https://placehold.co/120x120/19A7CE/FFF' },
    { name: 'Merry', job: 'Lawyer', gender: 'Female', country: 'Ireland', age: 35, avatar: 'https://placehold.co/120x120/3F497F/FFF' },
    { name: 'Steve', job: 'Doctor', gender: 'Male', country: 'India', age: 35, avatar: 'https://placehold.co/120x120/3A98B9/FFF' }
  ];

  onShowDetailClicked = new EventEmitter<User>();

  showUserDetail(user: User) {
    this.onShowDetailClicked.emit(user);
  }
}

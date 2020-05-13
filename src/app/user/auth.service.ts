import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: User;
  constructor() {}

  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      username: username,
      firstName: 'Dillon',
      lastName: 'Coffman',
    };
  }

  isAuthenticated() {
    return !!this.currentUser; // !! evaluates and casts to boolean
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}

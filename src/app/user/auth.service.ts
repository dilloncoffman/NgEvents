import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: User;
  constructor(private http: HttpClient) {}

  loginUser(username: string, password: string) {
    // set current user when someone logs in
    let loginInfo = { username: username, password: password };
    let options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http
      .post('/api/login', loginInfo, options)
      .pipe(
        // use .tap() to tap into Observable stream of data
        tap((data) => {
          this.currentUser = <User>data['user'];
        })
      )
      .pipe(
        catchError((err) => {
          // if there is an error, put a false value into the Observable
          return of(false);
        })
      );
  }

  isAuthenticated() {
    return !!this.currentUser; // !! evaluates and casts to boolean
  }

  updateCurrentUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}

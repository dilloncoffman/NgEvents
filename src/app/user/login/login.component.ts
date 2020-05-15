import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  mouseoverLogin: boolean;
  loginInvalid: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(formValues) {
    console.log(formValues);
    this.authService
      .loginUser(formValues.username, formValues.password)
      .subscribe((response) => {
        console.log('response for loginForm: ', response);
        if (!response) {
          // in AuthService, we return of(false) which returns a false Observable IF there was an HTTP error logging in
          this.loginInvalid = true;
        } else {
          this.router.navigate(['events']);
        }
      });
  }

  cancel() {
    this.router.navigate(['events']);
  }
}

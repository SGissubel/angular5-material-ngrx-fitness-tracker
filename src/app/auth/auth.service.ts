import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from './user.model';
import { IAuthData } from './auth-data.model';

@Injectable()
export class AuthService {
  isLoggedIn = new Subject<boolean>();
  private user: IUser;

  constructor(private router: Router) {}

  registerUser(authData: IAuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessful();
  }

  login(authData: IAuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authSuccessful();
  }

  logout() {
    this.user = null;
    this.isLoggedIn.next(false);
    this.router.navigate(['']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user !== null;
  }

  authSuccessful() {
    this.isLoggedIn.next(true);
    this.router.navigate(['/training']);
  }
}

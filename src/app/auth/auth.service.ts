import { Subject } from 'rxjs/Subject';

import { IUser } from './user.model';
import { IAuthData } from './auth-data.model';


export class AuthService {
  isLoggedIn = new Subject<boolean>();
  private user: IUser;
  
  registerUser(authData: IAuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.isLoggedIn.next(true);
  }

  login(authData: IAuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.isLoggedIn.next(true);
  }

  logout() {
    this.user = null;
    this.isLoggedIn.next(false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user !== null;
  }
}
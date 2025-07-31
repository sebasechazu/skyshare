import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isLoggedIn = false;
  private _user: string | null = null;

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    if (email && password) {
      this._isLoggedIn = true;
      this._user = email;
      return true;
    }
    return false;
  }

  register(email: string, password: string): boolean {
    return this.login(email, password);
  }

  logout() {
    this._isLoggedIn = false;
    this._user = null;
    this.router.navigate(['/login']);
  }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  get user() {
    return this._user;
  }
}

import { Injectable } from '@angular/core';
import { Users } from '../models/user';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_ROLE = 'auth-role'
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  //sessionStorage: Storage = ''
  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public saveRole(role: string): void {
    window.sessionStorage.removeItem(USER_ROLE);
    window.sessionStorage.setItem(USER_ROLE, role);
  }

  public getRole() {
    return sessionStorage.getItem(USER_ROLE);
  }

  public saveUser(user : string): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, user);
  }
  public getUser() {
    return sessionStorage.getItem(USER_KEY);
 }
}
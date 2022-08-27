import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credential';
import { Users } from '../models/user';
import { TokenModel } from '../models/tokenmodel';
const AUTH_API = 'https://localhost:7224/Authentication/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  signUpUrl = ' https://localhost:7011/Author/CreateAccount'

  constructor(private http: HttpClient) { }



    login(credential : Credentials):Observable<any>{
        console.log('Inside servce')
        return this.http.post<any>(AUTH_API, credential );
  }

  register(user : Users): Observable<Users> {
    return this.http.post<Users>(this.signUpUrl, user);
  }
}
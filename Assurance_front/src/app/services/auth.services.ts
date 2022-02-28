import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';



@Injectable()
export class AuthService {
    private apiServerUrl = environment.apiBaseUrl + "/users";

  constructor(private http: HttpClient) {}


  logIn(email: string, password: string): Observable<User> {
    const url = `${this.apiServerUrl}/login`;
    return this.http.post<User>(url, {email, password});
  }

  signUp(user: User): Observable<User> {
    const user$= JSON.stringify(user);
    console.log("iciiiiiiiiiii"+{user$});
    return this.http.post<User>(`${this.apiServerUrl}/create`, user );
  }
}
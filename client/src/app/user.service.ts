import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface User {
  email: string;
  password: string; // doubt I need this
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username: string[][] = [
    ["Deep Kygo", "Overwatch", "NA"],
    ["SC2Troller", "League Of Legends", "NA"],
    ["Deep Kygo", "Starcraft II", "NA"],
  ]
  email: string;
  isLoggedIn: boolean;
  password: string; // Do I need this?
  url = 'localhost:8082';
  user: User

  // username, games, isloggedin, email, password, region
  constructor(private http: HttpClient) { }
  setEmail(email: string) {
    this.email = email;
  }

  createAccount() {
    const email = this.email;
    this.http.post(this.url + '/register', email).subscribe(response => {
      console.log(response);
    });

  }
}

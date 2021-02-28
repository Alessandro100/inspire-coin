import { Injectable } from '@angular/core';

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

  createAccount(username, password, confirmation){

  }

  // username, games, isloggedin, email, password, region
  constructor() { }
}

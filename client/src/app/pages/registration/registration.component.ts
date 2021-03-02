import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  password: string = 'XfbhdixbJi326778!!';
  step = 1;
  games = ["League Of Legends", "Valorant", "Overwatch", "StarCraft II"];
  regions = ["North America", "Europe West", "South Korea", "China"];
  selectedGame: string;
  email: string;
  constructor(private router: Router, private userService: UserService) { }
  ngOnInit(): void {
  }
  getPassword(): string {
    return this.password;
  }
  verifyEmail() {
    // create account in db
    ++this.step; //brings the div to the next step
  }
  createAccount() {
    this.userService.setEmail(this.email);
    console.log('Response', this.userService.createAccount());
    this.userService.createAccount();
  }
  linkAccount() {
    //rito api stuffuu?
  }
  proceed() {
    // create account in db
    ++this.step; //brings the div to the next step
  }
  bringToHome() {
    // LOGS IN THE USER
    this.router.navigateByUrl('/home');
  }
}

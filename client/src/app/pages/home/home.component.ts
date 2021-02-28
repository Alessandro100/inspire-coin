import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = "John Dick";
  challenges = [
     ["Lane Kingdom", "Establish a 30 cs lead against your opponent at 10 minutes"] ,
     ["Zed Master", "Deal over 60 000 damage to champions in a single game as Zed"] ,
     ["Comeback King", "Start a game 0/3/0 and recover by winning the game without dying"] ,
  ]
  games = ["League Of Legends", "Overwatch"]; // will have to be coming from user service
  publicAdress = 'XNJxb&xy9XbuIX676x';
  constructor() { }

  ngOnInit(): void {
  }
  getGasFees(){
    //yeah dude
  }

}

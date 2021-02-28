import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false; // Temporarily hack to test dynamic header
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isLanding(): boolean {

    return this.router.url == '/' ? true : false;
  }
  logOut() {
    // logs out the user and returns to landing page
  }
}

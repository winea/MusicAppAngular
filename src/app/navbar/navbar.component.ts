import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'play-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  googleUrl() {
    window.location.href = 'https://play.google.com/store';
  }

  appleUrl() {
    window.location.href = 'https://www.apple.com/br/app-store/';
}
}

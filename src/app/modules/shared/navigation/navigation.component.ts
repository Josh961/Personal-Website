import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  onHomePage = false;
  displayMobileNavigation = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.checkHomeRoute()
  }

  private checkHomeRoute(): void {
    if (this.router.url === '/home') {
      this.onHomePage = true;
    }
  }
}
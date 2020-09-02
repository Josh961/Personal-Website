import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit, OnDestroy {
  onHomePage = false;
  displayMobileNavigation = false;

  constructor(
    private router: Router,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.checkHomeRoute();
  }

  ngOnDestroy(): void {
    this.renderer.setStyle(document.body, 'overflow', 'initial');
  }

  private checkHomeRoute(): void {
    if (this.router.url === '/home') {
      this.onHomePage = true;
    }
  }

  toggleMobileNavigation(display: boolean): void {
    if (display) {
      this.displayMobileNavigation = true;
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.displayMobileNavigation = false;
      this.renderer.setStyle(document.body, 'overflow', 'initial');
    }
  }
}

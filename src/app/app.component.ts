import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title = 'personal-website';

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.renderer.addClass(document.body, theme);
    } else {
      this.renderer.addClass(document.body, 'light');
    }
  }
}

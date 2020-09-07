import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { ThemeService } from 'src/app/services/theme-service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.scss']
})

export class ThemeSelectorComponent {
  @Output() themeSelected = new EventEmitter<string>();

  constructor(
    private renderer: Renderer2,
    private themeService: ThemeService
  ) { }

  toggleTheme(theme: string): void {
    switch (theme) {
      case 'light':
        this.renderer.addClass(document.body, 'light');
        this.renderer.removeClass(document.body, 'dark');
        this.renderer.removeClass(document.body, 'solarized');
        localStorage.setItem('theme', 'light');
        this.themeService.setTheme('light');
        break;
      case 'dark':
        this.renderer.addClass(document.body, 'dark');
        this.renderer.removeClass(document.body, 'light');
        this.renderer.removeClass(document.body, 'solarized');
        localStorage.setItem('theme', 'dark');
        this.themeService.setTheme('dark');
        break;
      case 'solarized':
        this.renderer.addClass(document.body, 'solarized');
        this.renderer.removeClass(document.body, 'light');
        this.renderer.removeClass(document.body, 'dark');
        localStorage.setItem('theme', 'solarized');
        this.themeService.setTheme('solarized');
        break;
    }
  }
}

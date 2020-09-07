import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ThemeService } from 'src/app/services/theme-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnDestroy, AfterViewInit {
  @ViewChild('home') home: ElementRef;
  private ngUnsubscribe = new Subject();

  constructor(
    private renderer: Renderer2,
    private themeService: ThemeService
  ) { }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngAfterViewInit(): void {
    this.peformInitialThemeCheck();
    this.subscribeToThemeService();
  }

  private peformInitialThemeCheck(): void {
    const lightThemeSet = document.body.classList.contains('light');
    const darkThemeSet = document.body.classList.contains('dark');

    if (lightThemeSet) {
      this.home.nativeElement.classList.remove('home--dark');
      this.home.nativeElement.classList.remove('home--solarized');
    } else if (darkThemeSet) {
      this.renderer.addClass(this.home.nativeElement, 'home--dark');
      this.home.nativeElement.classList.remove('home--solarized');
    } else {
      this.renderer.addClass(this.home.nativeElement, 'home--solarized');
      this.home.nativeElement.classList.remove('home--dark');
    }
  }

  private subscribeToThemeService(): void {
    this.themeService.getTheme()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        if (res === 'light') {
          this.renderer.removeClass(this.home.nativeElement, 'home--dark');
          this.renderer.removeClass(this.home.nativeElement, 'home--solarized');
        } else if (res === 'dark') {
          this.renderer.addClass(this.home.nativeElement, 'home--dark');
          this.renderer.removeClass(this.home.nativeElement, 'home--solarized');
        } else if (res === 'solarized') {
          this.renderer.addClass(this.home.nativeElement, 'home--solarized');
          this.renderer.removeClass(this.home.nativeElement, 'home--dark');
        }
      });
  }
}

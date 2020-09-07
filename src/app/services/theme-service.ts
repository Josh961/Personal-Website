import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeSubject = new ReplaySubject<string>(1);

  public setTheme(theme: string) {
    this.themeSubject.next(theme);
  }

  public getTheme(): Observable<string> {
    return this.themeSubject.asObservable()
      .pipe(catchError(err => of('light')));
  }
}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    FooterComponent,
    NavigationComponent,
    ThemeSelectorComponent
  ],
  declarations: [
    CardComponent,
    FooterComponent,
    NavigationComponent,
    ThemeSelectorComponent
  ],
  providers: [],
})
export class SharedModule { }

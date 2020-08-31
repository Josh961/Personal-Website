import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    FooterComponent,
    NavigationComponent
  ],
  declarations: [
    CardComponent,
    FooterComponent,
    NavigationComponent
  ],
  providers: [],
})
export class SharedModule { }

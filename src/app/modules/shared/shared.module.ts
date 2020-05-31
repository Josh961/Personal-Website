import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavigationComponent
  ],
  declarations: [
    FooterComponent,
    NavigationComponent
  ],
  providers: [],
})
export class SharedModule { }

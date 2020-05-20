import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './component/home.component';
import { routes } from './home.routes';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [
    HomeComponent
  ],
  providers: [],
})
export class HomeModule { }

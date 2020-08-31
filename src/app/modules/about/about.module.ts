import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { routes } from './about.routes';
import { AboutComponent } from './component/about.component';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [],
  declarations: [
    AboutComponent
  ],
  providers: [],
})
export class AboutModule { }

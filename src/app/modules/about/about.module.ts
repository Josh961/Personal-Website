import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './component/about.component';
import { routes } from './about.routes';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [
    AboutComponent
  ],
  providers: [],
})
export class AboutModule { }

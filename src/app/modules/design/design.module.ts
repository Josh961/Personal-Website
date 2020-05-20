import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DesignComponent } from './component/design.component';
import { routes } from './design.routes';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [
    DesignComponent
  ],
  providers: [],
})
export class DesignModule { }

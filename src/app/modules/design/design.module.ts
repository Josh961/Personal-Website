import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DesignComponent } from './component/design.component';
import { routes } from './design.routes';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [],
  declarations: [
    DesignComponent
  ],
  providers: [],
})
export class DesignModule { }

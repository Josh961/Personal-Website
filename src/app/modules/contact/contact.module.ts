import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './component/contact.component';
import { routes } from './contacat.routes';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [],
  declarations: [
    ContactComponent
  ],
  providers: [],
})
export class ContactModule { }

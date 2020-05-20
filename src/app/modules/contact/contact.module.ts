import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './component/contact.component';
import { routes } from './contacat.routes';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [
    ContactComponent
  ],
  providers: [],
})
export class ContactModule { }

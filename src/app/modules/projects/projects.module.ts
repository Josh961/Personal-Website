import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './component/projects.component';
import { routes } from './projects.routes';

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [],
  declarations: [
    ProjectsComponent
  ],
  providers: [],
})
export class ProjectsModule { }

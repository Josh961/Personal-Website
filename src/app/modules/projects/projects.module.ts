import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProjectsComponent } from './component/projects.component';
import { routes } from './projects.routes';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [
    ProjectsComponent
  ],
  providers: [],
})
export class ProjectsModule { }

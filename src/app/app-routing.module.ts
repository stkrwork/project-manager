import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectViewComponent } from './project-view/project-view.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { ArchiveViewComponent } from './archive-view/archive-view.component';

const routes: Routes = [
    { path: 'projects', component: ProjectViewComponent },
    { path: 'archive', component: ArchiveViewComponent },
    { path: '', redirectTo: 'projects', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

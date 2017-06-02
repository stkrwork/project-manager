import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { TaskEditorComponent } from './task-editor/task-editor.component';
import { DatepickerModule } from 'angular2-material-datepicker';
import { CreateTaskComponent } from './create-task/create-task.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { StatusFormatterPipe } from './status-formatter.pipe';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { TaskHighlighterDirective } from './task-highlighter.directive';
import { ArchiveViewComponent } from './archive-view/archive-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectViewComponent,
    TaskEditorComponent,
    CreateTaskComponent,
    CreateProjectComponent,
    StatusFormatterPipe,
    EditProjectComponent,
    TaskHighlighterDirective,
    ArchiveViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DatepickerModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

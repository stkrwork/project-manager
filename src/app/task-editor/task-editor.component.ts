import { ProjectFetcherService } from '../project-fetcher.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { Task } from '../task';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css'],
  providers: [ProjectFetcherService]
})
export class TaskEditorComponent {
  @Input() task: Task;
  private statii = [
    { id: 0, name: 'Waiting' },
    { id: 1, name: 'InProgress' },
    { id: 2, name: 'Done' }
  ];

  constructor() { }
}

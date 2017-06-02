import { Project } from '../project';
import { Task } from '../task';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  project: Project = {};
  @Output() projectReady = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createProject() {
    this.project.tasks = new Array<Task>();
    this.projectReady.emit(this.project);
    this.project = {};
  }

}

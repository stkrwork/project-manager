import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from '../task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  task: Task = {};
  @Output() taskReady = new EventEmitter();
  private statii = [
    { id: 0, name: 'Waiting' },
    { id: 1, name: 'InProgress' },
    { id: 2, name: 'Done' }
  ];

  constructor() { }

  ngOnInit() {
  }

  createTask() {
    this.taskReady.emit(this.task);
    this.task = {};
  }

}

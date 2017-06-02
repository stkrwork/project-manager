import { Project } from '../project';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  @Input() project: Project;
  constructor() { }

  ngOnInit() {
  }

}

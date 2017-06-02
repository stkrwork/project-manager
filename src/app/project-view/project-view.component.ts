import { Component, OnInit } from '@angular/core';

import { Project } from '../project';
import { ProjectFetcherService } from '../project-fetcher.service';
import { Task } from '../task';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css'],
  providers: [ProjectFetcherService]
})
export class ProjectViewComponent implements OnInit {
  public projects: Project[];
  public selectedTask: Task;
  private nextTaskId;
  private nextProjectId;
  public selectedProject: Project;
  public hideCompleted = false;
  public taskToDelete: Task;
  public projectToDelete: Project;

  constructor(
    private projectFetcher: ProjectFetcherService,
    private router: Router
  ) { }

  ngOnInit() {
    this.projectFetcher.fetchProjects().subscribe(projects => this.projects = projects);
  }

  editTask(task, modal) {
    this.selectedTask = task;
    modal.style.display = 'block';
  }

  editProject(project, modal) {
    this.selectedProject = project;
    modal.style.display = 'block';
  }

  closeTaskEditor(modal) {
    modal.style.display = 'none';
    this.projectFetcher.saveProjects(this.projects).subscribe();
  }

  closeProjectEditor(modal) {
    modal.style.display = 'none';
    this.projectFetcher.saveProjects(this.projects).subscribe();
  }

  createTask(modal, taskId, selectedProject) {
    modal.style.display = 'block';
    this.nextTaskId = taskId;
    this.selectedProject = selectedProject;
  }

  createProject(modal, projectId) {
    modal.style.display = 'block';
    this.nextProjectId = projectId;
  }

  closeWindow(modal) {
    modal.style.display = 'none';
  }

  onTaskCreationComplete(modal, task, projectId) {
    this.closeWindow(modal);
    task.id = this.nextTaskId;
    const tasks = this.projects.find(project => project.id === projectId).tasks;
    tasks.push(task);
    this.projectFetcher.saveProjects(this.projects).subscribe();
  }

  onProjectCreationComplete(modal, project) {
    this.closeWindow(modal);
    project.id = this.nextProjectId;
    this.projects.push(project);
    this.projectFetcher.saveProjects(this.projects).subscribe();
  }

  deleteTask(modal) {
    this.closeWindow(modal);
    this.projectToDelete.tasks = this.projectToDelete.tasks.filter(task => this.taskToDelete.id !== task.id);
    this.projectFetcher.saveProjects(this.projects).subscribe();
  }

  prepareTaskDeletion(taskToDelete, project, modal) {
    modal.style.display = 'block';
    this.taskToDelete = taskToDelete;
    this.projectToDelete = project;
  }

  deleteProject(modal) {
    this.closeWindow(modal);
    this.projects = this.projects.filter(p => this.projectToDelete.id !== p.id);
    this.projectFetcher.saveProjects(this.projects).subscribe();
  }

  prepareProjectDeletion(projectToDelete, modal) {
    modal.style.display = 'block';
    this.projectToDelete = projectToDelete;
  }

  archiveTask(task) {
    task.isArchived = true;
    this.projectFetcher.saveProjects(this.projects).subscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectFetcherService } from '../project-fetcher.service';

@Component({
  selector: 'app-archive-view',
  templateUrl: './archive-view.component.html',
  styleUrls: ['./archive-view.component.css'],
  providers: [ProjectFetcherService]
})
export class ArchiveViewComponent implements OnInit {
  public projects: Project[];
  public selectedTask;
  private nextTaskId;
  private nextProjectId;
  public selectedProject;

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

  closeTaskCreator(modal) {
    modal.style.display = 'none';
  }

  closeProjectCreator(modal) {
    modal.style.display = 'none';
  }

  onTaskCreationComplete(modal, task, projectId) {
    this.closeTaskCreator(modal);
    task.id = this.nextTaskId;
    const tasks = this.projects.find(project => project.id === projectId).tasks;
    tasks.push(task);
    this.projectFetcher.saveProjects(this.projects).subscribe();
  }

  onProjectCreationComplete(modal, project) {
    this.closeProjectCreator(modal);
    project.id = this.nextProjectId;
    this.projects.push(project);
    this.projectFetcher.saveProjects(this.projects).subscribe();
  }

  deleteTask(taskToDelete, project) {
    project.tasks = project.tasks.filter(task => taskToDelete.id !== task.id);
    this.projectFetcher.saveProjects(this.projects).subscribe();
  }

  deleteProject(projectToDelete) {
    this.projects = this.projects.filter(p => projectToDelete.id !== p.id);
    this.projectFetcher.saveProjects(this.projects).subscribe();
  }

  unarchiveTask(task) {
    task.isArchived = false;
    this.projectFetcher.saveProjects(this.projects).subscribe();
  }


}

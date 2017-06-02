import { Project } from './project';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProjectFetcherService {

  constructor(
    private http: Http
  ) { }

  fetchProjects() {
    return this.http.get('http://localhost:8081/loadProjects')
      .map((res: Response) => res.json() as Project[])
      .catch((error: any) => Observable.throw(error));
  }

  getTask(projectName, id) {
    return this.http.get('http://localhost:8081/loadProjects')
      .map((res: Response) => {
        const projects = res.json() as Project[];
        const task = projects.find(project => project.projectName === projectName).tasks[id];
        return task;
      })
      .catch((error: any) => Observable.throw(error));
  }

  saveProjects(data) {
    const options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
    return this.http.post('http://localhost:8081/saveProjects', data, options)
      .map((res: Response) => res)
      .catch((error: any) => Observable.throw(error));
  }
}

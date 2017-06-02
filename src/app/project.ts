import { Task } from './task';

export interface Project {
  id?: number;
  projectName?: string;
  tasks?: Task[];
  dataShown?: boolean;
  isArchived?: boolean;
}

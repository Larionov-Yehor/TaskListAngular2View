
import { Injectable } from '@angular/core'
import {TaskList} from "./task-list";
import {TASKLISTS} from "./mock-list";



@Injectable()
export class TaskListService{
  getAll(): Promise<TaskList[]>{
  return Promise.resolve(TASKLISTS)}
}




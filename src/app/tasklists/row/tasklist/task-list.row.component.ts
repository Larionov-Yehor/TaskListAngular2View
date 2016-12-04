
import {TaskList} from "./task-list";
import {Component, OnInit} from "@angular/core";
import {TaskListService} from "./task-list.service";

@Component({
  selector: 'task-list-row',
  templateUrl: './task-list.row.component.html',
  styleUrls: ['./task-list.row.component.css'],

})
export class TaskListRow implements OnInit{
taskLists: TaskList[];

constructor(private taskListService: TaskListService){}

getAll(){
  this.taskListService.getAll().then(taskLists => this.taskLists = taskLists);
}

ngOnInit(){
  this.getAll();
}
}

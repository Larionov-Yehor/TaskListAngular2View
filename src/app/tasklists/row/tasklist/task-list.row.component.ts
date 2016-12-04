
import {TaskList} from "./task-list";
import {Component, OnInit} from "@angular/core";
import {TaskListService} from "./task-list.service";
import {Router} from "@angular/router";


@Component({
  selector: 'task-list-row',
  templateUrl: './task-list.row.component.html',
  styleUrls: ['./task-list.row.component.css'],
  providers: [TaskListService],


})
export class TaskListRow implements OnInit{
taskLists: TaskList[];
showAddTaskListForm: boolean;

constructor(private router: Router,
            private taskListService: TaskListService){}
  ngOnInit(){
    this.getAll();
  }
getAll(){
  this.taskListService.getAll().then(taskLists => this.taskLists = taskLists);
}


showTaskListAdder():void{
  this.showAddTaskListForm = true;
}

addTaskList():void{
 this.router.navigate(['/addTaskList']);
}

}

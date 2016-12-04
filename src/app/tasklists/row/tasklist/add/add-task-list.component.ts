import {Component, Input} from "@angular/core";


@Component({
  selector: 'add-task-list',
  templateUrl: './add-task-list.component.html',
  styleUrls: ['./add-task-list.component.css'],

})
export class AddTaskList{
@Input()
show: boolean;

}

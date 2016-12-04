import {Component, Input} from "@angular/core";
import {Router} from "@angular/router";


@Component({
  selector: 'add-task-list',
  templateUrl: './add-task-list.component.html',
  styleUrls: ['./add-task-list.component.css'],

})
export class AddTaskList{
@Input()
show: boolean;

constructor(private router: Router){}

closeTaskListAdder():void {
  this.show = false;
}

}

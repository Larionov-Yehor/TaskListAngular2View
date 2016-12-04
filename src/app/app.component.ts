import { Component } from '@angular/core';
import { TaskListService } from "./tasklists/row/tasklist/task-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TaskListService ]
})
export class AppComponent {

  title = 'app works!';

}

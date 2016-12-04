import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AddTaskList} from "./tasklists/row/tasklist/add/add-task-list.component";
import {TaskListRow} from "./tasklists/row/tasklist/task-list.row.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TaskListRow },
  { path: 'addTaskList', component: AddTaskList },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


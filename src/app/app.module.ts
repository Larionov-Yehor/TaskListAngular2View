import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {TaskListService} from "./tasklists/row/tasklist/task-list.service";
import {TaskListRow} from "./tasklists/row/tasklist/task-list.row.component";
import {AddTaskList} from "./tasklists/row/tasklist/add/add-task-list.component";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    TaskListRow,
    AddTaskList
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

  ],
  providers: [TaskListService],
  bootstrap: [TaskListRow]
})


export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TaskListService} from "./tasklists/row/tasklist/task-list.service";
import {TaskListRow} from "./tasklists/row/tasklist/task-list.row.component";

@NgModule({
  declarations: [
    TaskListRow
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskListService],
  bootstrap: [TaskListRow]
})
export class AppModule { }

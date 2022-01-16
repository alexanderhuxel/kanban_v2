import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { GlobalFunctionsService } from 'src/app/services/global-functions.service';
import { Task } from 'src/models/task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent implements OnInit {
  task: Task = new Task();
  constructor(
    public database: DatabaseService,
    public globalFunctions: GlobalFunctionsService,
    @Inject(MAT_DIALOG_DATA) public data: { column: string; preset: boolean }
  ) {}
  ngOnInit(): void {
    if (this.database.DialogOpen) {
      this.task.column = this.data.column;
    }
  }
}

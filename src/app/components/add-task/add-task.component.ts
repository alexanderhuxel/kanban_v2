import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent implements OnInit {
  task: Task = new Task();
  constructor(
    public database: DatabaseService,
    @Inject(MAT_DIALOG_DATA) public data: { column: string }
  ) {}
  ngOnInit(): void {
    if (this.database.DialogOpen) {
      this.task.column = this.data.column;
    }
  }
}

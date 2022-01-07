import { Component, OnInit, Inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-add-taskto-row',
  templateUrl: './add-taskto-row.component.html',
  styleUrls: ['./add-taskto-row.component.scss'],
})
export class AddTasktoRowComponent implements OnInit {
  task: Task = new Task();
  column = {};
  constructor(
    public database: DatabaseService,
    @Inject(MAT_DIALOG_DATA) public data: { column: string }
  ) {}

  ngOnInit(): void {
    this.column = this.data;
    this.task.column = this.data.column;
  }
}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
import { TimeService } from 'src/app/services/time.service';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss'],
})
export class EditTaskDialogComponent implements OnInit {
  constructor(
    public database: DatabaseService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string; path: string },
    public time: TimeService
  ) {}
  task: Task = new Task();
  currentTask = this.database.getTaskByID(this.data.path, this.data.id);

  currentObj: any = [];
  date: any = [];
  loading = false;

  updateTask() {
    this.task.title = this.currentObj[0].title;
    this.task.description = this.currentObj[0].description;
    this.task.date = this.currentObj[0].date;
    this.task.importance = this.currentObj[0].importance;
    this.database.updateTask(this.task, this.data.path, this.data.id);
  }

  ngOnInit(): void {
    this.currentTask.subscribe((result) => {
      this.currentObj.push(result);
      this.date.push(this.currentObj[0].date);
      console.log(this.date[0].seconds);
      setTimeout(() => {
        this.loading = true;
      }, 25);
    });
  }
}

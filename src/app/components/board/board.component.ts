import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DatabaseService } from 'src/app/services/database.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/dialogs/confirmation-dialog/confirmation-dialog.component';
import { Task } from 'src/models/task';
import { AddTaskComponent } from '../add-task/add-task.component';
import { EditTaskDialogComponent } from 'src/app/dialogs/edit-task-dialog/edit-task-dialog.component';
import { TimeService } from 'src/app/services/time.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  faPlus = faPlus;
  task: Task = new Task();
  constructor(
    public database: DatabaseService,
    public dialog: MatDialog,
    public time: TimeService
  ) {}

  openDialog(column: string): void {
    let dialogRef = this.dialog.open(AddTaskComponent, {
      data: { column: column },
    });
    this.database.DialogOpen = true;

    dialogRef.afterClosed().subscribe(() => {
      this.database.workingDone = false;
      this.database.maxTask = false;
      this.database.DialogOpen = false;
    });
  }

  openEditTaskDialog(path: string, id: string): void {
    let dialogRef = this.dialog.open(EditTaskDialogComponent, {
      data: { path: path, id: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.database.workingDone = false;
    });
  }

  openConfirmationDialog(path: string, id: string): void {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { path: path, id: id },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.database.workingDone = false;
    });
  }

  ngOnInit(): void {}
}

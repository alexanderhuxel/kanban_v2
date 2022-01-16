import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DatabaseService } from 'src/app/services/database.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from 'src/app/dialogs/confirmation-dialog/confirmation-dialog.component';
import { Task } from 'src/models/task';
import { AddTaskComponent } from '../add-task/add-task.component';
import { GlobalFunctionsService } from 'src/app/services/global-functions.service';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  faPlus = faPlus;
  board = {};
  task: Task = new Task();
  currentObj: any = [];

  constructor(
    public database: DatabaseService,
    public dialog: MatDialog,
    public globalFunctions: GlobalFunctionsService
  ) {}

  openDialog(column: string, preset: boolean): void {
    let dialogRef = this.dialog.open(AddTaskComponent, {
      data: { column: column, preset: preset },
    });
    this.database.DialogOpen = true;

    dialogRef.afterClosed().subscribe(() => {
      this.database.workingDone = false;
      this.database.DialogOpen = false;
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

  ngOnInit(): void {
    this.board = this.database.DATABASE;
  }
}

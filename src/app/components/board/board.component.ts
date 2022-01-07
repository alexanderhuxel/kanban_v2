import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DatabaseService } from 'src/app/services/database.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTasktoRowComponent } from 'src/app/dialogs/add-taskto-row/add-taskto-row.component';
import { ConfirmationDialogComponent } from 'src/app/dialogs/confirmation-dialog/confirmation-dialog.component';
import { Task } from 'src/models/task';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  faPlus = faPlus;
  task: Task = new Task();
  constructor(public database: DatabaseService, public dialog: MatDialog) {}

  // get new Date from timestamp extract Date Month and year convert to formatet Datet und multipli with 1000
  generateTime(timestamp: any) {
    const date = new Date(timestamp * 1000);
    const Day = date.getDate();
    let Month = date.getMonth();
    const Year = date.getFullYear();
    if (Month == 0) {
      Month++;
    }
    return Day + '/' + Month + '/' + Year;
  }

  openDialog(column: string): void {
    let dialogRef = this.dialog.open(AddTasktoRowComponent, {
      data: { column: column },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.database.savingSucess = false;
      this.database.maxTask = false;
    });
  }

  openConfirmationDialog(path: string, id: string): void {
    let dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { path: path, id: id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  ngOnInit(): void {}
}

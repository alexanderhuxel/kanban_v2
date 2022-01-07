import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/services/database.service';
@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent implements OnInit {
  id = {};
  path = {};
  constructor(
    public database: DatabaseService,
    @Inject(MAT_DIALOG_DATA) public data: { path: string; id: string }
  ) {}

  ngOnInit(): void {
    console.log(this.data.id);
    console.log(this.data.path);
  }
}

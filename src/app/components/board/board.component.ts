import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DatabaseService } from 'src/app/services/database.service';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor(public database: DatabaseService) {}
  faPlus = faPlus;
  object = {};
  ToDo = this.database
    .getBoard('To Do')
    .subscribe((result) => console.log(result));

  inProgress = this.database
    .getBoard('in Progress')
    .subscribe((result) => console.log(result));

  Done = this.database
    .getBoard('Done')
    .subscribe((result) => console.log(result));

  ngOnInit(): void {
    console.log(this.ToDo, this.inProgress, this.Done);
  }
}

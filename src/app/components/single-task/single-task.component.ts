import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.scss'],
})
export class SingleTaskComponent implements OnInit {
  constructor(public database: DatabaseService) {}

  ngOnInit(): void {}
}

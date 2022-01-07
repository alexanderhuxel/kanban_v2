import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent implements OnInit {
  task: Task = new Task();

  constructor(public database: DatabaseService) {}
  ngOnInit(): void {}
}

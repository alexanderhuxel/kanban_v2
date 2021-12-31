import { Component, OnInit } from '@angular/core';
import { Task } from 'src/models/task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  constructor() {}

  task = new Task();

  getNewTaskObject() {
    console.log(this.task);
  }

  ngOnInit(): void {}
}

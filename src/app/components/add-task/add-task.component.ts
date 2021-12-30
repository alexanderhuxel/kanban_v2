import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  constructor() {}

  taskForm = new FormGroup({
    title: new FormControl('Nancy', Validators.minLength(2)),
    category: new FormControl('Drew'),
    description: new FormControl('Drew'),
    date: new FormControl('Drew'),
    importance: new FormControl('Drew'),
  });

  task = {
    title: '',
    category: '',
    description: '',
    date: '',
    importance: '',
    done: false,
  };

  test() {
    console.log(this.task);
  }

  ngOnInit(): void {}
}

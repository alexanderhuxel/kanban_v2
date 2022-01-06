import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { DatabaseService } from 'src/app/services/database.service';

// import { Observable } from 'rxjs';
import { Task } from 'src/models/task';

// interface Item {
//   title: string;
//   category: string;
//   description: string;
//   date: string;
//   importance: string;
//   done: boolean;
// }

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
})
export class AddTaskComponent implements OnInit {
  task: Task = new Task();

  constructor(private firestore: Firestore, public database: DatabaseService) {}

  ngOnInit(): void {}
}

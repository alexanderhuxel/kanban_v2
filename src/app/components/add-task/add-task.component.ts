import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  docData,
  deleteDoc,
  updateDoc,
  collectionChanges,
  DocumentReference,
  setDoc,
} from '@angular/fire/firestore';

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
  // item$: Observable<Item[]>;

  constructor(private firestore: Firestore) {}

  addToDatabase() {
    // TODO: change "teamBoardAlex to userBoard"
    const nestedPath = '/teamBoardAlex/board/' + this.task.column;
    const databasePath: any = collection(this.firestore, nestedPath);
    const newTask = this.task.objectToJSON();
    return addDoc(databasePath, newTask);
  }
  ngOnInit(): void {}
}

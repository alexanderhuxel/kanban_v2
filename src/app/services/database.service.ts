import { Injectable } from '@angular/core';
import {
  addDoc,
  collectionData,
  deleteDoc,
  docData,
  Firestore,
  updateDoc,
} from '@angular/fire/firestore';
import { collection, doc } from 'firebase/firestore';
import { Task } from 'src/models/task';

// TODO: add logic to chaneg Row dynamicli

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private firestore: Firestore) {}
  Task = new Task();
  firstRowArray: any = [];
  secondRowArray: any = [];
  thirdRowArray: any = [];

  getBoard(path: string) {
    const collectionRef = collection(
      this.firestore,
      'teamBoardAlex/board/' + path
    );
    return collectionData(collectionRef, { idField: 'id' });
  }

  getTaskByID(id: string) {
    const collectionDocRef = doc(this.firestore, `teamBoardAlex/${id}`);
    return docData(collectionDocRef, { idField: 'id' });
  }

  // creating new Task in database with the ref and "path"
  addToDatabase(Task: Task, path: string) {
    const collectionRef = collection(
      this.firestore,
      'teamBoardAlex/board/' + path
    );
    if (this.secondRowArray.length == 3 && path == 'in Progress') {
      alert(
        'The Row you choosed is currently filled with 3 Task, change your Selection or reorder your Board!'
      );
      return;
    } else {
      return addDoc(collectionRef, Task.objectToJSON());
    }
  }

  removeTask(Task: Task, id: string) {
    const collectionRef = doc(this.firestore, `teamBoardAlex/${id}`);
    return deleteDoc(collectionRef);
  }

  updateTask(Task: Task, id: string) {
    const CollectionDocRef = doc(this.firestore, `teamBoardAlex/${id}`);
    return updateDoc(CollectionDocRef, {
      titel: Task.title,
      text: Task.description,
    });
  }

  firstRow = this.getBoard('To Do').subscribe((result) => {
    console.log(result);
    this.firstRowArray = result;
    console.log(this.firstRowArray.length);
  });

  SecondRow = this.getBoard('in Progress').subscribe((result) => {
    console.log(result);
    this.secondRowArray = result;
  });

  ThirdRow = this.getBoard('Done').subscribe((result) => {
    console.log(result);
    this.thirdRowArray = result;
  });
}

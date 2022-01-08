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
  Task: Task = new Task();
  maxTask = false;
  workingProcessRunning = false;
  workingDone = false;
  DialogOpen = false;
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

  getTaskByID(path: string, id: string) {
    const collectionDocRef = doc(
      this.firestore,
      `teamBoardAlex/board/${path}/${id}`
    );
    return docData(collectionDocRef, { idField: 'id' });
  }

  // creating new Task in database with the ref and "path"
  addToDatabase(Task: Task, path: string) {
    const collectionRef = collection(
      this.firestore,
      'teamBoardAlex/board/' + path
    );
    if (this.secondRowArray.length == 3 && path == 'in Progress') {
      this.maxTask = true;
      return;
    } else {
      this.workingProcessRunning = true;
      addDoc(collectionRef, Task.objectToJSON()).then(() => {
        this.workingProcessRunning = false;
        this.workingDone = true;
        return;
      });
    }
  }

  removeTask(path: string, id: string) {
    const collectionRef = doc(
      this.firestore,
      `teamBoardAlex/board/${path}/${id}`
    );
    deleteDoc(collectionRef).then(() => {
      this.workingProcessRunning = true;
      this.workingDone = true;
      setTimeout(() => {
        this.workingProcessRunning = false;
        return;
      }, 1000);
    });
  }

  updateTask(Task: Task, path: string, id: string) {
    const CollectionDocRef = doc(
      this.firestore,
      `teamBoardAlex/board/${path}/${id}`
    );
    updateDoc(CollectionDocRef, {
      title: Task.title,
      description: Task.description,
      date: Task.description,
      importance: Task.importance,
    }).then(() => {
      this.workingProcessRunning = true;
      this.workingDone = true;
      setTimeout(() => {
        this.workingProcessRunning = false;
        return;
      }, 1000);
    });
  }

  firstRow = this.getBoard('To Do').subscribe((result) => {
    this.firstRowArray = result;
    console.log(this.firstRowArray);
  });

  SecondRow = this.getBoard('in Progress').subscribe((result) => {
    this.secondRowArray = result;
    console.log(this.secondRowArray);
  });

  ThirdRow = this.getBoard('Done').subscribe((result) => {
    this.thirdRowArray = result;
    console.log(this.thirdRowArray);
  });
}

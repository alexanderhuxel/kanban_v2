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
import { GlobalFunctionsService } from './global-functions.service';

// TODO: add logic to chaneg Row dynamicli

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  To_Do: any;
  constructor(
    private firestore: Firestore,
    private globalFunctions: GlobalFunctionsService
  ) {}
  Task: Task = new Task();
  workingProcessRunning = false;
  workingDone = false;
  DialogOpen = false;
  DATABASE: any = {
    To_Do: [],
    in_Progress: [],
  };

  getBoard(path: string) {
    const collectionRef = collection(
      this.firestore,
      'teamBoardAlex/board/' + this.globalFunctions.updateName(path)
    );
    return collectionData(collectionRef, { idField: 'id' });
  }

  getTaskByID(path: string, id: string) {
    const collectionDocRef = doc(
      this.firestore,
      `teamBoardAlex/board/${this.globalFunctions.updateName(path)}/${id}`
    );
    return docData(collectionDocRef, { idField: 'id' });
  }

  // creating new Task in database with the ref and "path"
  addToDatabase(Task: Task, path: string) {
    const collectionRef = collection(
      this.firestore,
      'teamBoardAlex/board/' + this.globalFunctions.updateName(path)
    );

    this.workingProcessRunning = true;
    addDoc(collectionRef, Task.objectToJSON()).then(() => {
      this.workingProcessRunning = false;
      this.workingDone = true;
      return;
    });
  }

  removeTask(path: string, id: string) {
    const collectionRef = doc(
      this.firestore,
      `teamBoardAlex/board/${this.globalFunctions.updateName(path)}/${id}`
    );
    deleteDoc(collectionRef);
  }

  updateTask(Task: Task, path: string, id: string) {
    const CollectionDocRef = doc(
      this.firestore,
      `teamBoardAlex/board/${this.globalFunctions.updateName(path)}/${id}`
    );
    updateDoc(CollectionDocRef, {
      title: Task.title,
      description: Task.description,
      date: Task.description,
      importance: Task.importance,
      id: Task.id,
      attached: Task.attached,
    });
  }

  firstRow = this.getBoard('To Do').subscribe((result) => {
    this.DATABASE.To_Do = result;
  });

  SecondRow = this.getBoard('in Progress').subscribe((result) => {
    this.DATABASE.in_Progress = result;
  });
}

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

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private firestore: Firestore) {}
  Task = new Task();

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
    return addDoc(collectionRef, Task.objectToJSON());
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
}

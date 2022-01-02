import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DatabaseService } from 'src/app/services/database.service';
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
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor(public database: DatabaseService, private firestore: Firestore) {}

  object = {};

  addNewColumn() {
    // TODO: create dialog for name of column
    const nestedPath = '/teamBoardAlex/board/test/';
    const databasePath: any = collection(this.firestore, nestedPath);
    return addDoc(databasePath, this.object);
  }

  faPlus = faPlus;
  ngOnInit(): void {}
}

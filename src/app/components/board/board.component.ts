import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  faPlus = faPlus;
  constructor(public database: DatabaseService) {}

  // get new Date from timestamp extract Date Month and year convert to formatet Datet und multipli with 1000
  generateTime(timestamp: any) {
    const date = new Date(timestamp * 1000);
    const Day = date.getDate();
    let Month = date.getMonth();
    const Year = date.getFullYear();
    if (Month == 0) {
      Month++;
    }
    return Day + '/' + Month + '/' + Year;
  }

  ngOnInit(): void {}
}

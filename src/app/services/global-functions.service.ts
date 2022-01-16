import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalFunctionsService {
  constructor() {}

  // get new Date from timestamp extract Date Month and year convert to formatet Datet und multipli with 1000
  generateTime(timestamp: any) {
    const date = new Date(timestamp * 1000);
    const Day = date.getDate();
    let Month = date.getMonth();
    if (Month == 0) {
      Month++;
    }
    return Day + ' / ' + Month;
  }

  updateName(name: string) {
    let blankname = name;
    const result = blankname.replace('_', ' ');
    return result;
  }
}

export class Task {
  title: string;
  column: string;
  description: string;
  date: string;
  importance: string;
  done: boolean;

  constructor(obj?: any) {
    this.title = obj ? obj.title : '';
    this.column = obj ? obj.column : '';
    this.description = obj ? obj.description : '';
    this.date = obj ? obj.date : '';
    this.importance = obj ? obj.importance : '';
    this.done = obj ? obj.done : '';
  }

  objectToJSON() {
    return {
      title: this.title,
      column: this.column,
      description: this.description,
      date: this.date,
      importance: this.importance,
      done: this.done,
    };
  }
}

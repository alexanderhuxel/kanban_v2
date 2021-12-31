export class Task {
  title: string;
  category: string;
  description: string;
  date: string;
  importance: string;
  done: boolean;

  constructor(obj?: any) {
    this.title = obj ? obj.title : '';
    this.category = obj ? obj.category : '';
    this.description = obj ? obj.description : '';
    this.date = obj ? obj.date : '';
    this.importance = obj ? obj.importance : '';
    this.done = obj ? obj.done : '';
  }

  objectToJSON() {
    title: this.title;
    category: this.category;
    description: this.description;
    date: this.date;
    importance: this.importance;
    done: this.done;
  }
}

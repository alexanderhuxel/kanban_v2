export class Task {
  title: string;
  column: string;
  description: string;
  date: string;
  importance: string;
  id: string;
  attached: [];
  deleteopen: boolean;
  editOnProgress: boolean;

  constructor(obj?: any) {
    this.title = obj ? obj.title : '';
    this.column = obj ? obj.column : '';
    this.description = obj ? obj.description : '';
    this.date = obj ? obj.date : '';
    this.importance = obj ? obj.importance : '';
    this.id = obj ? obj.id : '';
    this.attached = [];
    this.deleteopen = false;
    this.editOnProgress = true;
  }

  objectToJSON() {
    return {
      title: this.title,
      column: this.column,
      description: this.description,
      date: this.date,
      importance: this.importance,
      id: this.id,
      attached: this.attached,
      deleteopen: this.deleteopen,
      editOnProgress: this.deleteopen,
    };
  }
}

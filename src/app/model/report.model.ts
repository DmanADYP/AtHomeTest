export class User {
  id: number;
  title: string;
  author: string;
  

  constructor(report:any) {
    this.id = report.id;
    this.title = report.title;
    this.author = report.author;
   
  }
}
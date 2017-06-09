export class User {
  id: number;
  title: string;
  author: string;
  

  constructor(report?:any) {
    this.id = report.id || null;
    this.title = report.title  || null;
    this.author = report.author  || null;
   
  }
}
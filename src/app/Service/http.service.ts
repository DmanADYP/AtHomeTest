import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { User } from "app/model/report.model";

@Injectable()
export class HttpService{
  
    constructor(private http: Http) {
        
    }
getQuote():Observable<User>{

return this.http.get('http://localhost:3000/posts/1')
 .map(result => result.json())
 //.catch(this.getError);
/*.subscribe(
            data =>{ this.user = data,
                console.log(data),
                console.log(this.user);
            }
        );*/
}
 private getError(error: Response): Observable<any>{
      console.log(error);
      return Observable.throw(error.json() || 'Server Issue');
  }


/*
private extractData(
    ResponseSerialized:Response):Observable<User[]>
{
    let response = ResponseSerialized.json();
    return response || {};
}
*/
}
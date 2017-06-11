 /* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BE } from "app/model/BE.model";

@Injectable()
export class HttpService {
     // Resolve HTTP using the constructor
     constructor (private http: Http) {}
     // private instance variable to hold base url
     private BEUrl = 'http://localhost:3000/posts'; 
     private  queryUrl: string = '?search=';


// Fetch all existing be
     getBE() : Observable<BE[]> {

         // ...using get request
         return this.http.get(this.BEUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
     getOneBE(id:string) : Observable<BE[]> {

         // ...using get request
         return this.http.get('http://localhost:3000/posts/?id='+id
             //this.BEUrl+'/?id='+id
             )
                        //.filter(project => (<Project>project).id == id)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
       getOtherBE(id:string) : Observable<BE> {

         // ...using get request
         return this.http.get('http://localhost:3000/posts/?id='+id
             //this.BEUrl+'/?id='+id
             )
                        //.filter(project => (<Project>project).id == id)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

// Search all existing
search(terms: Observable<string>) {
    
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
        .get(this.BEUrl + this.queryUrl + term)
       // ...and calling .json() on the response to return data
        .map((res:Response) => res.json())
       //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

// Add a new BE
    addBE (body: Object): Observable<BE> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(this.BEUrl, body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   

    // Update a BE
    updateBE(body: Object,id:string): Observable<BE[]> {
        // let bodyString = JSON.stringify(body); // Stringify payload
        // let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        // let options       = new RequestOptions({ headers: headers }); // Create a request option
        //     console.log(`${body['id']}`);
        // return this.http.put(`${this.BEUrl}/${body['id']}`, body, options) // ...using put request
        //                  .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
        //                  .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
         let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.put(`${this.BEUrl}/${id}`, body, options) // ...using post request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   

    // Delete a BE
    removeBE (id:string): Observable<BE> {
        return this.http.delete(`${this.BEUrl}/${id}`) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || false)); //...errors if any
    }   
    deleteBE(){
        this.http.delete(this.BEUrl+"/"+"BJvOHE_fW");
    }
}
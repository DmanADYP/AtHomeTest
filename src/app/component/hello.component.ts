import { Component, OnInit } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable";
import { User } from "app/model/report.model";
import { HttpService } from "app/Service/http.service";

@Component({
    selector:'hello-app',
    template:`<h1>hello, {{name}}</h1>
    say hello to
     <input [value]="name"
    (input)="name =$event.target.value">
    {{quoteOfTheDay.title}}
    <button (click)="getQuote()"> get a quote</button>
       <tr *ngFor="let hero of heroes">
                <td>{{hero.name}}</td>
            </tr>
    
{{user.title}}
    x
    `,
    providers:[HttpService]
})
export class HelloComponent implements OnInit{
    ngOnInit(): void {
      this.getQuote();
    }
    name: string = "world";
quoteOfTheDay:string="";
user=new User('');
heroes: any[];
constructor(private httpservice: HttpService,private http:Http){
    
}

getQuote(){
    this.httpservice.getQuote()
    .subscribe(
            data =>{ this.user = data,
                console.log(data),
                console.log(this.user);
            }
    );
   
}
/*
getQuote(){

 this.http.get('http://localhost:3000/posts/1')
 .map(result => result.json())
 //.catch(this.getError);
.subscribe(
            data =>{ this.user = data,
                console.log(data),
                console.log(this.user);
            }
        );
}*/

}


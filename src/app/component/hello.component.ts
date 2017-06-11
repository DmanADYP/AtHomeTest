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
   
    }
    name: string = "world";
quoteOfTheDay:string="";
user=new User('');
heroes: any[];
constructor(private httpservice: HttpService,private http:Http){
    
}



}


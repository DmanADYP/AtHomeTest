import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HelloComponent } from "app/component/hello.component";
import { HttpService } from "app/Service/http.service";
import { PeopleListComponent } from "app/component/people.component";
import { LoginComponent } from "app/component/login.component";

@NgModule({
  declarations: [
    AppComponent
    ,HelloComponent,
    PeopleListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

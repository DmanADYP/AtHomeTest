import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from "app/component/hello.component";
import { HttpService } from "app/Service/http.service";
import { routing } from "app/routing/routing.service";
import { LoginComponent } from "app/component/login.component";

@NgModule({
  declarations: [
    AppComponent
    ,HelloComponent
    ,LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

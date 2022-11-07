import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({

  declarations: [ 
    AppComponent, 
    HelloComponent ,
    ParentComponent,
    ChildComponent
  ],

  imports:[
     BrowserModule,
     FormsModule,
    AppRoutingModule 
  ],


  bootstrap: [ AppComponent ]
})
export class AppModule { }

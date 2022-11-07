import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  userName:string=""

  updateName(){
    this.userName= "Maggi!"
  }

  receiveChildData(data){
    console.log(data);
    }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  childData:any
  constructor() { }

  ngOnInit() {
  }

  parentData = " Im Coming From Parent To Child Data message from parent"

recivedDataParent(data){
  this.childData=data
}

}
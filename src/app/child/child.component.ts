import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input()  parentData:string
  
  ngOnInit() {
    this.parentData="Hi Vinod Im Child data"
  }

}
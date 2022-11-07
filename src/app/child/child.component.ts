import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';

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

  /// Out Put 

  childtoParent : string = "Hi ... message from child";

  @Output()  outputfromChild : EventEmitter<string> = new EventEmitter();

  sendParent(){
    this.outputfromChild.emit(this.childtoParent)
  }

}
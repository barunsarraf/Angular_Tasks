import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component3s5',
  templateUrl: './component3s5.component.html',
  styleUrls: ['./component3s5.component.css']
})
export class Component3s5Component implements OnInit {
  @Output() public childEvent=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  send(valuess)
  {
    this.childEvent.emit(valuess);
  }

}

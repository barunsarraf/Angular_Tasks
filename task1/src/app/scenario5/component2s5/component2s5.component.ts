import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component2s5',
  templateUrl: './component2s5.component.html',
  styleUrls: ['./component2s5.component.css']
})
export class Component2s5Component implements OnInit {
  @Output() orchildupar=new EventEmitter();
  constructor() { }
  ngOnInit() {
  }
  msg(maa)
  {
    this.orchildupar.emit(maa);
  }

}

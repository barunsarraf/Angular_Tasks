import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1s6',
  templateUrl: './component1s6.component.html',
  styleUrls: ['./component1s6.component.css']
})
export class Component1s6Component implements OnInit {
  public siblingdata="";
  constructor() { }

  ngOnInit() {
  }

  sendto3child(value)
  {
    this.siblingdata=value;
  }
}

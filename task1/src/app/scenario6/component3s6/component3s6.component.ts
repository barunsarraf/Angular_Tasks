import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component3s6',
  templateUrl: './component3s6.component.html',
  styleUrls: ['./component3s6.component.css']
})
export class Component3s6Component implements OnInit {
  @Input('parentData') public siblingdata;
  constructor() { }

  ngOnInit() {
  }

}

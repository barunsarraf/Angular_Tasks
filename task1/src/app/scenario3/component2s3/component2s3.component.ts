import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component2s3',
  templateUrl: './component2s3.component.html',
  styleUrls: ['./component2s3.component.css']
})
export class Component2s3Component implements OnInit {

  @Input('parentData') public values;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1s3',
  templateUrl: './component1s3.component.html',
  styleUrls: ['./component1s3.component.css']
})
export class Component1s3Component implements OnInit {
  public values="";

  constructor() { }

  ngOnInit() {
  }
  
  sendtochild(input_values)
  {
    this.values=input_values;
  }

}

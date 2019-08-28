import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-component2s4',
  templateUrl: './component2s4.component.html',
  styleUrls: ['./component2s4.component.css']
})
export class Component2s4Component implements OnInit {
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sendtoparent(input_values)
  {
    this.childEvent.emit(input_values);
  }

}

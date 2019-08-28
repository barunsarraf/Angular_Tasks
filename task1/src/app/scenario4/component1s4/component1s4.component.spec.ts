import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1s4Component } from './component1s4.component';

describe('Component1s4Component', () => {
  let component: Component1s4Component;
  let fixture: ComponentFixture<Component1s4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component1s4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1s4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2s4Component } from './component2s4.component';

describe('Component2s4Component', () => {
  let component: Component2s4Component;
  let fixture: ComponentFixture<Component2s4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component2s4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2s4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1s6Component } from './component1s6.component';

describe('Component1s6Component', () => {
  let component: Component1s6Component;
  let fixture: ComponentFixture<Component1s6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component1s6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1s6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

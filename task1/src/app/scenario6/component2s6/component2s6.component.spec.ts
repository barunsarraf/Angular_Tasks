import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2s6Component } from './component2s6.component';

describe('Component2s6Component', () => {
  let component: Component2s6Component;
  let fixture: ComponentFixture<Component2s6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component2s6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2s6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

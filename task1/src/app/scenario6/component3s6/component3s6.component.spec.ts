import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component3s6Component } from './component3s6.component';

describe('Component3s6Component', () => {
  let component: Component3s6Component;
  let fixture: ComponentFixture<Component3s6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component3s6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component3s6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

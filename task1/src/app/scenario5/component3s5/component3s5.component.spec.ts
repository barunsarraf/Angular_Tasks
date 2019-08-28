import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component3s5Component } from './component3s5.component';

describe('Component3s5Component', () => {
  let component: Component3s5Component;
  let fixture: ComponentFixture<Component3s5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component3s5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component3s5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

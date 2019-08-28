import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2s5Component } from './component2s5.component';

describe('Component2s5Component', () => {
  let component: Component2s5Component;
  let fixture: ComponentFixture<Component2s5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component2s5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2s5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

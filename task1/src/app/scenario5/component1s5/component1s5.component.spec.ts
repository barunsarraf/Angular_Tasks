import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1s5Component } from './component1s5.component';

describe('Component1s5Component', () => {
  let component: Component1s5Component;
  let fixture: ComponentFixture<Component1s5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component1s5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1s5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

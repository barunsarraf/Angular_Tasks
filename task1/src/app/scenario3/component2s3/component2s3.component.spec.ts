import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component2s3Component } from './component2s3.component';

describe('Component2s3Component', () => {
  let component: Component2s3Component;
  let fixture: ComponentFixture<Component2s3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component2s3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component2s3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

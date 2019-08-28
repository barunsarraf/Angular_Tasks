import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Component1s3Component } from './component1s3.component';

describe('Component1s3Component', () => {
  let component: Component1s3Component;
  let fixture: ComponentFixture<Component1s3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Component1s3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Component1s3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

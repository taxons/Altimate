/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AltiesComponent } from './alties.component';

describe('AltiesComponent', () => {
  let component: AltiesComponent;
  let fixture: ComponentFixture<AltiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

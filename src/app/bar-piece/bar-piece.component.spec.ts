/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarPieceComponent } from './bar-piece.component';

describe('BarPieceComponent', () => {
  let component: BarPieceComponent;
  let fixture: ComponentFixture<BarPieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarPieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarPieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

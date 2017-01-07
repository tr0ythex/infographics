/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PiePieceComponent } from './pie-piece.component';

describe('PiePieceComponent', () => {
  let component: PiePieceComponent;
  let fixture: ComponentFixture<PiePieceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiePieceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiePieceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BarPieceComponent } from './bar-piece.component';
import { BarPiece } from './bar-piece.model';

describe('BarPieceComponent', () => {
    let component: BarPieceComponent;
    let fixture: ComponentFixture<BarPieceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BarPieceComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BarPieceComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        const barPiece = new BarPiece(10, 10, 100, 100, 'green');
        component.barPiece = barPiece;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PiePieceComponent } from './pie-piece.component';
import { PiePiece } from './pie-piece.model';

describe('PiePieceComponent', () => {
    let component: PiePieceComponent;
    let fixture: ComponentFixture<PiePieceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PiePieceComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PiePieceComponent);
        component = fixture.componentInstance;
    });

    it('should create pie piece with radiuses 10 and 10, angles 0 and PI/2 and red color', () => {
        let piePiece = new PiePiece(10, 20, 0, Math.PI * .5, 'red');
        component.piePiece = piePiece;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});

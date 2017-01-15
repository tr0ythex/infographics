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

    it('should create pie piece with radiuses 20 and 10, angles 0 and PI/2 and red color', () => {
        let piePiece = new PiePiece(20, 10, 0, Math.PI * .5, 'red');
        component.piePiece = piePiece;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should set largeArcFlag correct largeArcFlag to pie piece depending on angles', () => {
        let piePiece = new PiePiece(20, 10, 0, Math.PI * .5, '');
        component.piePiece = piePiece;
        expect(component.largeArcFlag).toEqual(0);

        piePiece = new PiePiece(20, 10, 0, Math.PI * 1.5, '');
        component.piePiece = piePiece;
        expect(component.largeArcFlag).toEqual(1);
    });

    it('should set fill to default color if color is not set', () => {
        let piePiece = new PiePiece(20, 10, 0, Math.PI, '');
        component.defaultColor = 'black';
        component.piePiece = piePiece;
        expect(component.fill).toEqual(component.defaultColor);

        piePiece.color = 'red';
        component.piePiece = piePiece;
        expect(component.fill).toEqual('red');
        expect(component.fill).not.toEqual(component.defaultColor);
    });

    it('should set correct sector path if pie piece is not full circle', () => {
        let piePiece = new PiePiece(50, 40, 0, Math.PI * .5, '');
        component.piePiece = piePiece;
        expect(component.path).toEqual(`
            M 100 50
            A 50 50, 0, 0, 0, 50 0
            L 50 10
            A 40 40, 0, 0, 1, 90 50
            L 100 50
            Z
        `);
    });

    xit('should set path to ...', () => {

    });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PiePieceAnimatedTranslateComponent } from './pie-piece-animated-translate.component';
import { PiePiece } from '../pie-piece/pie-piece.model';

describe('PiePieceAnimatedTranslateComponent', () => {
    let component: PiePieceAnimatedTranslateComponent;
    let fixture: ComponentFixture<PiePieceAnimatedTranslateComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PiePieceAnimatedTranslateComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PiePieceAnimatedTranslateComponent);
        component = fixture.componentInstance;
    });

    it('should create animated pie piece', () => {
        let piePiece = new PiePiece(50, 40, 0, Math.PI * .5, '');
        component.piePiece = piePiece;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should animate pie piece on mouse over and mouse out', () => {
        let piePiece = new PiePiece(50, 40, 0, Math.PI * .3, '');

        component.piePiece = piePiece;
        component.bl = 12;

        let elem = <SVGGElement>fixture.debugElement.nativeElement;
        let bisectorAlpha = component.piePiece.startAngle +
            (component.piePiece.finishAngle - component.piePiece.startAngle) / 2;
        let x = component.bl * Math.cos(bisectorAlpha);
        let y = -component.bl * Math.sin(bisectorAlpha);

        fixture.detectChanges();
        component.onMouseOver();
        expect(elem.style.transform).toEqual(`translate(${Math.round(x)}px, ${Math.round(y)}px)`);

        component.onMouseOut();
        expect(elem.style.transform).toEqual('translate(0px, 0px)');
    });
});

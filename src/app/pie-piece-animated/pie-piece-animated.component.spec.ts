/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PiePieceAnimatedTranslateComponent } from './pie-piece-animated-translate.component';
import { PiePieceAnimatedScaleComponent } from './pie-piece-animated-scale.component';
import { PiePiece } from '../pie-piece/pie-piece.model';

describe('PiePieceAnimatedComponent', () => {

    describe('Translate', () => {
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

        it('should create translate animated pie piece', () => {
            let piePiece = new PiePiece(50, 40, 0, Math.PI * .5, '');
            component.piePiece = piePiece;
            fixture.detectChanges();
            expect(component).toBeTruthy();
        });

        it('should animate translate pie piece on mouse over and mouse out', () => {
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

    describe('Scale', () => {
        let component: PiePieceAnimatedScaleComponent;
        let fixture: ComponentFixture<PiePieceAnimatedScaleComponent>;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [PiePieceAnimatedScaleComponent]
            })
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(PiePieceAnimatedScaleComponent);
            component = fixture.componentInstance;
        });

        it('should create scale animated pie piece with intRadius equals 0', () => {
            let piePiece = new PiePiece(50, 40, 0, Math.PI * .5, '');
            component.piePiece = piePiece;
            fixture.detectChanges();
            expect(component).toBeTruthy();
            expect(component.piePiece.intRadius).toEqual(0);
        });

        it('should animate scale pie piece on mouse over and mouse out', () => {
            let piePiece = new PiePiece(50, 40, 0, Math.PI * .3, '');
            component.piePiece = piePiece;

            let elem = <SVGGElement>fixture.debugElement.nativeElement;
            fixture.detectChanges();

            component.onMouseOver();
            expect(elem.getBoundingClientRect().width / elem.clientWidth).toBeCloseTo(1.2, 1);
            expect(elem.style.transformOrigin)
                .toEqual(`${component.piePiece.extRadius}px ${component.piePiece.extRadius}px 0px`);
        });
    });
});

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PiePieceComponent } from './pie-piece.component';
import { PiePiece } from './pie-piece.model';
import { LegendLineDirective } from './animated/legend-line.directive';

describe('PiePieceComponent', () => {
    let component: PiePieceComponent;
    let fixture: ComponentFixture<PiePieceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PiePieceComponent,
                LegendLineDirective
            ]
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
        piePiece = new PiePiece(20, 10, 1, 3, '');
        component.piePiece = piePiece;
        expect(component.path).toEqual(`
            M 30.806046117362797 3.170580303842069
            A 20 20, 0, 0, 0, 0.20015006799109258 17.177599838802657
            L 10.100075033995546 18.58879991940133
            A 10 10, 0, 0, 1, 25.4030230586814 11.585290151921035
            L 30.806046117362797 3.170580303842069
            Z
        `);
        piePiece = new PiePiece(50, 0, 5, Math.PI * 2, '');
        component.piePiece = piePiece;
        expect(component.path).toEqual(`
            M 64.1831092731613 97.94621373315692
            A 50 50, 0, 0, 0, 100 50.000000000000014
            L 50 50
            A 0 0, 0, 0, 1, 50 50
            L 64.1831092731613 97.94621373315692
            Z
        `);
    });

    it('should set correct sector path if pie piece is full circle', () => {
        let piePiece = new PiePiece(50, 40, 0, Math.PI * 2, '');
        component.piePiece = piePiece;
        expect(component.path).toEqual(`
            M 100 50
            A 50 50, 0, 1, 0, 0 49.99999999999999
            L 10 49.99999999999999
            A 40 40, 0, 1, 1, 90 50
            L 100 50
            Z
        
            M 0 49.99999999999999
            A 50 50, 0, 1, 0, 100 50.000000000000014
            L 90 50.00000000000001
            A 40 40, 0, 1, 1, 10 49.99999999999999
            L 0 49.99999999999999
            Z
        `);
    });

    it('should add two-lines path on mouse over', () => {
        let piePiece = new PiePiece(50, 40, 0, Math.PI * 2, '');
        component.piePiece = piePiece;
        fixture.detectChanges();
        const de = fixture.debugElement.query(By.directive(LegendLineDirective));
        de.triggerEventHandler('mouseover', null);
        let paths = de.nativeElement.parentElement.querySelectorAll('path');
        expect(paths.length).toEqual(2);
        let d = (<SVGPathElement>paths[paths.length - 1]).getAttribute('d');
        expect(d).toEqual('M -2.5 49.99999999999999 L -25 49.99999999999999 L -50 49.99999999999999');
    });
});

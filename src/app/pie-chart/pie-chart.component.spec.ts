/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PieChartComponent } from './pie-chart.component';
import { PiePieceComponent } from '../pie-piece/pie-piece.component';
import { PiePiece } from '../pie-piece/pie-piece.model';
import { InfoNumberColor } from '../info/info.types';

describe('PieChartComponent', () => {
    let component: PieChartComponent;
    let fixture: ComponentFixture<PieChartComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PieChartComponent, PiePieceComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PieChartComponent);
        component = fixture.componentInstance;
    });

    it('should create empty pie chart with no info', () => {
        component.info = [];
        expect(component).toBeTruthy();
    });

    it('should create empty SVG element with width and height equals to double extRadius', () => {
        const svg = <SVGElement>fixture.nativeElement.querySelector('svg');
        const extRadius = 50;
        const intRadius = 40;
        expect(component.extRadius).toBeUndefined();
        expect(component.intRadius).toBeUndefined();

        component.extRadius = extRadius;
        component.intRadius = intRadius;
        component.info = [];
        fixture.detectChanges();

        expect(parseFloat(svg.getAttribute('width'))).toEqual(extRadius * 2);
        expect(parseFloat(svg.getAttribute('height'))).toEqual(extRadius * 2);
    });

    it('should create SVG element with three sectors with correct colors in it', () => {
        const svg = <SVGElement>fixture.nativeElement.querySelector('svg');
        const extRadius = 50;
        const intRadius = 40;
        const info: InfoNumberColor[] = [
            {
                value: 325,
                color: 'red'
            },
            {
                value: 100,
                color: 'blue'
            },
            {
                value: 98,
                color: 'black'
            },
        ];

        component.extRadius = extRadius;
        component.intRadius = intRadius;
        component.info = info;
        fixture.detectChanges();

        // each sector is a <g> element and a <path> inside it
        let gs = svg.querySelectorAll('g');
        expect(gs.length).toEqual(3);
        [].forEach.call(gs, (g, i) => {
            let paths = (<SVGElement>g).querySelectorAll('path');
            expect(paths.length).toEqual(1);
            expect(paths[0].getAttribute('fill')).toEqual(info[i].color);
        });
    });
});

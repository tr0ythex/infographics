/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PieChartComponent } from './pie-chart.component';
import { PiePieceComponent } from '../pie-piece/pie-piece.component';
import { PiePiece } from '../pie-piece/pie-piece.model';
import { LegendLineDirective } from '../pie-piece/animated/legend-line.directive';
import { InfoNumberColor } from '../info/info.types';

describe('PieChartComponent', () => {
    let component: PieChartComponent;
    let fixture: ComponentFixture<PieChartComponent>;

    function setComponent(extRadius: number, intRadius: number, info: InfoNumberColor[], animated: boolean) {
        component.extRadius = extRadius;
        component.intRadius = intRadius;
        component.info = info;
        fixture.detectChanges();
    }

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PieChartComponent,
                PiePieceComponent,
                LegendLineDirective
            ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PieChartComponent);
        component = fixture.componentInstance;
    });

    it('should create pie chart', () => {
        expect(component).toBeTruthy();
    });

    it('should create SVG element with width and height equals to double extRadius', () => {
        setComponent(50, 40, [], false);
        const svg = <SVGElement>fixture.nativeElement.querySelector('svg');
        expect(parseFloat(svg.getAttribute('width'))).toEqual(50 * 2);
        expect(parseFloat(svg.getAttribute('height'))).toEqual(50 * 2);
    });

    it('should create SVG element with three sectors with correct colors in it', () => {
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
        setComponent(50, 40, info, false);
        // each sector is a <g> element and a <path> inside it
        const svg = <SVGElement>fixture.nativeElement.querySelector('svg');
        const gs = svg.querySelectorAll('g');
        expect(gs.length).toEqual(3);
        [].forEach.call(gs, (g, i) => {
            const paths = (<SVGElement>g).querySelectorAll('path');
            expect(paths.length).toEqual(1);
            expect(paths[0].getAttribute('fill')).toEqual(info[i].color);
        });
    });

    it('should create empty SVG element because of incorrent info values', () => {
        const info: InfoNumberColor[] = [
            {
                value: -100,
                color: '',
            },
            {
                value: 50,
                color: ''
            }
        ];
        setComponent(50, 40, info, false);
        const svg = <SVGElement>fixture.nativeElement.querySelector('svg');
        expect(svg.children.length).toEqual(0);
    });
});

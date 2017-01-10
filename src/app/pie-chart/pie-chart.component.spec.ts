/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PieChartComponent } from './pie-chart.component';
import { PiePieceComponent } from '../pie-piece/pie-piece.component';
import { PiePiece } from '../pie-piece/pie-piece.model';

describe('PieChartComponent', () => {
    let component: PieChartComponent;
    let fixture: ComponentFixture<PieChartComponent>;
    let radius = 50;

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

    it('should create pie chart with radius 50', () => {
        component.radius = radius;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });

    it('should create SVG element with width and height equals to double radius input property', () => {
        const svg = <SVGElement>fixture.nativeElement.querySelector('svg');

        expect(component.radius).toBeUndefined();

        component.radius = radius;
        fixture.detectChanges();

        expect(parseFloat(svg.getAttribute('width'))).toEqual(radius * 2);
        expect(parseFloat(svg.getAttribute('height'))).toEqual(radius * 2);
    });
});

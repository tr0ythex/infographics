/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PieChartComponent } from './pie-chart.component';

describe('PieChartComponent', () => {
    let component: PieChartComponent;
    let fixture: ComponentFixture<PieChartComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PieChartComponent]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PieChartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should create SVG element with width and height equals to double radius input property', () => {
        const svg = <SVGElement>fixture.nativeElement.querySelector('svg');
        const radius = 50;

        expect(component.radius).toBeUndefined();

        component.radius = radius;
        fixture.detectChanges();

        expect(parseFloat(svg.getAttribute('width'))).toEqual(radius * 2);
        expect(parseFloat(svg.getAttribute('height'))).toEqual(radius * 2);
    });
});

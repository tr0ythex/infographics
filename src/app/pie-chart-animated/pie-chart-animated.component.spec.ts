/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PieChartAnimatedComponent } from './pie-chart-animated.component';
import { PiePieceAnimatedTranslateComponent } from '../pie-piece-animated/pie-piece-animated-translate.component';
import { PiePieceAnimatedScaleComponent } from '../pie-piece-animated/pie-piece-animated-scale.component';

describe('PieChartAnimatedComponent', () => {
    let component: PieChartAnimatedComponent;
    let fixture: ComponentFixture<PieChartAnimatedComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                PieChartAnimatedComponent,
                PiePieceAnimatedTranslateComponent,
                PiePieceAnimatedScaleComponent
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PieChartAnimatedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

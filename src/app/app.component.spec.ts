/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PiePieceComponent } from './pie-piece/pie-piece.component';
import { LegendLineDirective } from './pie-piece/animated/legend-line.directive';
import { RadialMoveDirective } from './pie-piece/animated/radial-move.directive';
import { RadialScaleDirective } from './pie-piece/animated/radial-scale.directive';
import { FillDirective } from './pie-piece/animated/fill.directive';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BarPieceComponent } from './bar-piece/bar-piece.component';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                FormsModule,
            ],
            declarations: [
                AppComponent,
                PieChartComponent,
                PiePieceComponent,
                LegendLineDirective,
                RadialMoveDirective,
                RadialScaleDirective,
                FillDirective,
                BarChartComponent,
                BarPieceComponent
            ],
        });
        TestBed.compileComponents();
    });

    it('should create the app', async(() => {
        let fixture = TestBed.createComponent(AppComponent);
        let app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        expect(app).toBeTruthy();
    }));
});

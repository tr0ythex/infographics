/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PiePieceComponent } from './pie-piece/pie-piece.component';
import { PiePieceAnimatedTranslateComponent } from './pie-piece-animated/pie-piece-animated-translate.component';
import { PiePieceAnimatedScaleComponent } from './pie-piece-animated/pie-piece-animated-scale.component';
import { PiePieceAnimatedLinesComponent } from './pie-piece-animated/pie-piece-animated-lines.component';
import { PiePieceAnimatedFillComponent } from './pie-piece-animated/pie-piece-animated-fill.component';
import { PieChartAnimatedComponent } from './pie-chart-animated/pie-chart-animated.component';
import { LegendLineDirective } from './pie-piece/animated/legend-line.directive';

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
                PieChartAnimatedComponent,
                PiePieceComponent,
                PiePieceAnimatedTranslateComponent,
                PiePieceAnimatedScaleComponent,
                PiePieceAnimatedFillComponent,
                PiePieceAnimatedLinesComponent,
                LegendLineDirective
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

    // it(`should have as title 'app works!'`, async(() => {
    //   let fixture = TestBed.createComponent(AppComponent);
    //   let app = fixture.debugElement.componentInstance;
    //   expect(app.title).toEqual('app works!');
    // }));

    // it('should render title in a h1 tag', async(() => {
    //   let fixture = TestBed.createComponent(AppComponent);
    //   fixture.detectChanges();
    //   let compiled = fixture.debugElement.nativeElement;
    //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
    // }));
});

/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PiePieceComponent } from './pie-piece/pie-piece.component';
import { PiePieceAnimatedFillComponent } from './pie-piece-animated/pie-piece-animated-fill.component';
import { LegendLineDirective } from './pie-piece/animated/legend-line.directive';
import { RadialMoveDirective } from './pie-piece/animated/radial-move.directive';
import { RadialScaleDirective } from './pie-piece/animated/radial-scale.directive';

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
                PiePieceAnimatedFillComponent,
                LegendLineDirective,
                RadialMoveDirective,
                RadialScaleDirective
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

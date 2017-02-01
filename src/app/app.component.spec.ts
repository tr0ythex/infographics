/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PiePieceComponent } from './pie-piece/pie-piece.component';
import { PiePieceAnimatedTranslateComponent } from './pie-piece-animated/pie-piece-animated-translate.component';

describe('AppComponent', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                PieChartComponent,
                PiePieceComponent,
                PiePieceAnimatedTranslateComponent
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

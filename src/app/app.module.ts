import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PiePieceComponent } from './pie-piece/pie-piece.component';
import { PiePieceAnimatedFillComponent } from './pie-piece-animated/pie-piece-animated-fill.component';
import { LegendLineDirective } from './pie-piece/animated/legend-line.directive';
import { RadialMoveDirective } from './pie-piece/animated/radial-move.directive';
import { RadialScaleDirective } from './pie-piece/animated/radial-scale.directive';

@NgModule({
    declarations: [
        AppComponent,
        PieChartComponent,
        PiePieceComponent,
        PiePieceAnimatedFillComponent,
        LegendLineDirective,
        RadialMoveDirective,
        RadialScaleDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

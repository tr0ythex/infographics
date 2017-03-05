import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PiePieceComponent } from './pie-piece/pie-piece.component';
import { LegendLineDirective } from './pie-piece/animated/legend-line.directive';
import { RadialMoveDirective } from './pie-piece/animated/radial-move.directive';
import { RadialScaleDirective } from './pie-piece/animated/radial-scale.directive';
import { FillDirective } from './pie-piece/animated/fill.directive';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BarPieceComponent } from './bar-piece/bar-piece.component';

@NgModule({
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

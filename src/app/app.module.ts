import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { PiePieceComponent } from './pie-piece/pie-piece.component';
import { PiePieceAnimatedTranslateComponent } from './pie-piece-animated/pie-piece-animated-translate.component';
import { PiePieceAnimatedScaleComponent } from './pie-piece-animated/pie-piece-animated-scale.component';
import { PiePieceAnimatedFillComponent } from './pie-piece-animated/pie-piece-animated-fill.component';
import { PieChartAnimatedComponent } from './pie-chart-animated/pie-chart-animated.component';

@NgModule({
    declarations: [
        AppComponent,
        PieChartComponent,
        PiePieceComponent,
        PiePieceAnimatedTranslateComponent,
        PiePieceAnimatedScaleComponent,
        PieChartAnimatedComponent,
        PiePieceAnimatedFillComponent
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

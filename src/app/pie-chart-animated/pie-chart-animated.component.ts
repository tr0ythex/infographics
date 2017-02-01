import { Component, OnInit } from '@angular/core';
import { PieChartComponent } from '../pie-chart/pie-chart.component';

@Component({
    selector: 'app-pie-chart-animated',
    templateUrl: './pie-chart-animated.component.html',
    styleUrls: ['./pie-chart-animated.component.sass']
})
export class PieChartAnimatedComponent extends PieChartComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}

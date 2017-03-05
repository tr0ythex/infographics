import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.sass']
})
export class BarChartComponent implements OnInit {
    barPieces = [];
    barChartWidth: number = 400;
    barChartHeight: number = 300;

    constructor() { }

    ngOnInit() {
    }

}

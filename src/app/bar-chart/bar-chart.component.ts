import { Component, OnInit, Input } from '@angular/core';
import { InfoNumberColor } from '../info/info.types';
import { BarPiece } from '../bar-piece/bar-piece.model';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html',
    styleUrls: ['./bar-chart.component.sass']
})
export class BarChartComponent implements OnInit {
    @Input() set info(info: InfoNumberColor[]) {
        const width = this.barChartWidth / info.length;
        const maxVal = Math.max(...info.map(i => i.value));
        let x = 0;
        for (let i = 0; i < info.length; i++) {
            this.barPieces.push({
                x: x,
                y: this.barChartHeight - info[i].value / maxVal * this.barChartHeight,
                width: width,
                height: info[i].value / maxVal * this.barChartHeight,
                color: info[i].color
            });
            x += width;
        }
    }

    barChartWidth: number = 400;
    barChartHeight: number = 300;
    barPieces: BarPiece[] = [];

    constructor() { }

    ngOnInit() {
    }

}

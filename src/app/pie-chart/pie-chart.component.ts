import { Component, OnInit, Input } from '@angular/core';
import { PiePiece } from '../pie-piece/pie-piece.model';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.sass']
})
export class PieChartComponent implements OnInit {
    @Input() radius: number;
    piePieces: PiePiece[] = [];

    constructor() {
    }

    ngOnInit() {
        let piePiece = new PiePiece(
            this.radius,
            this.radius - 10,
            0,
            Math.PI / 2,
            'green'
        );
        this.piePieces.push(piePiece);
    }

}

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

    constructor() {}

    ngOnInit() {
        this.addPiece(new PiePiece(this.radius, this.radius - 10, 0, Math.PI * 2, 'red'));
    }

    addPiece(piePiece: PiePiece) {
        if (piePiece.areAnglesValid() && piePiece.areRadiusesValid()) {
            this.piePieces.push(piePiece);
        } else {
            console.log('Неверные параметры сектора');
        }
    }

}

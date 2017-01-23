import { Component, OnInit, Input } from '@angular/core';
import { PiePiece } from '../pie-piece/pie-piece.model';
import { InfoNumberColor } from '../info/info.types';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.sass']
})
export class PieChartComponent implements OnInit {
    @Input() extRadius: number;
    @Input() intRadius: number;
    @Input() info: InfoNumberColor[];
    @Input() animated: boolean;
    piePieces: PiePiece[] = [];

    constructor() {}

    ngOnInit() {
        let totalSum = this.info.reduce((a, b) => {
            return a + b.value;
        }, 0);
        let accSum = 0;
        for (let i = 0; i < this.info.length; i++) {
            let a1 = (accSum / totalSum) * Math.PI * 2;
            accSum += this.info[i].value;
            let a2 = (accSum / totalSum) * Math.PI * 2;
            let piePiece = new PiePiece(
                this.extRadius,
                this.intRadius,
                a1,
                a2,
                this.info[i].color
            );
            if (piePiece.isValid()) {
                this.piePieces.push(piePiece);
            } else {
                this.piePieces = [];
                break;
            }
        }
    }

    // private addPiece(piePiece: PiePiece) {
    //     if (piePiece.isValid()) {
    //         this.piePieces.push(piePiece);
    //     } else {
    //         console.log('Неверные параметры сектора');
    //     }
    // }

}

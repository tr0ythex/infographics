import { Component, OnInit, Input } from '@angular/core';
import { PiePiece } from './pie-piece.model';

@Component({
    selector: '[app-pie-piece]',
    templateUrl: './pie-piece.component.html',
    styleUrls: ['./pie-piece.component.sass']
})
export class PiePieceComponent implements OnInit {
    // @Input() extRadius: number;
    // @Input() intRadius: number;
    // @Input() startAngle: number;
    // @Input() finishAngle: number;
    // @Input() fill: string;
    @Input() piePiece: PiePiece;

    get path() {
        const x1 = this.piePiece.extRadius + this.piePiece.extRadius * Math.cos(this.piePiece.startAngle);
        const y1 = this.piePiece.extRadius - this.piePiece.extRadius * Math.sin(this.piePiece.startAngle);
        const x2 = this.piePiece.extRadius + this.piePiece.extRadius * Math.cos(this.piePiece.finishAngle);
        const y2 = this.piePiece.extRadius - this.piePiece.extRadius * Math.sin(this.piePiece.finishAngle);
        const x3 = this.piePiece.extRadius + this.piePiece.intRadius * Math.cos(this.piePiece.finishAngle);
        const y3 = this.piePiece.extRadius - this.piePiece.intRadius * Math.sin(this.piePiece.finishAngle);
        const x4 = this.piePiece.extRadius + this.piePiece.intRadius * Math.cos(this.piePiece.startAngle);
        const y4 = this.piePiece.extRadius - this.piePiece.intRadius * Math.sin(this.piePiece.startAngle);
        return `
            M ${x1} ${y1}
            A ${this.piePiece.extRadius} ${this.piePiece.extRadius}, 0, 0, 0, ${x2} ${y2}
            L ${x3} ${y3}
            A ${this.piePiece.intRadius} ${this.piePiece.intRadius}, 0, 0, 1, ${x4} ${y4}
            L ${x1} ${y1}
            Z
        `;
    }

    constructor() { }

    ngOnInit() {
    }

}

import { Component, OnInit, Input } from '@angular/core';
import { PiePiece } from './pie-piece.model';

@Component({
    selector: '[app-pie-piece]',
    templateUrl: './pie-piece.component.html',
    styleUrls: ['./pie-piece.component.sass']
})
export class PiePieceComponent implements OnInit {
    private _piePiece: PiePiece;
    private _defaultColor: string = '#000000';
    private _largeArcFlag: number = 0;

    @Input() set piePiece(piePiece: PiePiece) {
        this._piePiece = piePiece;
        if (piePiece.finishAngle - piePiece.startAngle > Math.PI) {
            this._largeArcFlag = 1;
        }
    }

    get path(): string {
        const x1 = this._piePiece.extRadius + this._piePiece.extRadius * Math.cos(this._piePiece.startAngle);
        const y1 = this._piePiece.extRadius - this._piePiece.extRadius * Math.sin(this._piePiece.startAngle);
        const x2 = this._piePiece.extRadius + this._piePiece.extRadius * Math.cos(this._piePiece.finishAngle);
        const y2 = this._piePiece.extRadius - this._piePiece.extRadius * Math.sin(this._piePiece.finishAngle);
        const x3 = this._piePiece.extRadius + this._piePiece.intRadius * Math.cos(this._piePiece.finishAngle);
        const y3 = this._piePiece.extRadius - this._piePiece.intRadius * Math.sin(this._piePiece.finishAngle);
        const x4 = this._piePiece.extRadius + this._piePiece.intRadius * Math.cos(this._piePiece.startAngle);
        const y4 = this._piePiece.extRadius - this._piePiece.intRadius * Math.sin(this._piePiece.startAngle);
        return `
            M ${x1} ${y1}
            A ${this._piePiece.extRadius} ${this._piePiece.extRadius}, 0, ${this._largeArcFlag}, 0, ${x2} ${y2}
            L ${x3} ${y3}
            A ${this._piePiece.intRadius} ${this._piePiece.intRadius}, 0, ${this._largeArcFlag}, 1, ${x4} ${y4}
            L ${x1} ${y1}
            Z
        `;
    }

    get fill(): string {
        return this._piePiece.color || this._defaultColor;
    }

    get largeArcFlag(): number {
        return this._largeArcFlag;
    }

    constructor() { }

    ngOnInit() {
    }

}

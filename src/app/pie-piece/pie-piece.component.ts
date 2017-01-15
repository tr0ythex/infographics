import { Component, OnInit, Input } from '@angular/core';
import { PiePiece } from './pie-piece.model';

@Component({
    selector: '[app-pie-piece]',
    templateUrl: './pie-piece.component.html',
    styleUrls: ['./pie-piece.component.sass']
})
export class PiePieceComponent implements OnInit {
    private _color: string;
    private _defaultColor: string = '#000000';
    private _largeArcFlag: number = 0;
    private _path: string;

    @Input() set piePiece(piePiece: PiePiece) {
        this._color = piePiece.color;

        if (piePiece.finishAngle - piePiece.startAngle > Math.PI) {
            this._largeArcFlag = 1;
        }

        if (piePiece.startAngle === 0 && piePiece.finishAngle === Math.PI * 2) {
            const r1 = piePiece.extRadius;
            const r2 = piePiece.intRadius;
            this._path = this.getPiePiecePath(r1, r2, 0, Math.PI) + this.getPiePiecePath(r1, r2, Math.PI, Math.PI * 2);
        } else {
            this._path = this.getPiePiecePath(
                piePiece.extRadius,
                piePiece.intRadius,
                piePiece.startAngle,
                piePiece.finishAngle
            );
        }
    }

    get path(): string {
        return this._path;
    }

    get fill(): string {
        return this._color || this._defaultColor;
    }

    get largeArcFlag(): number {
        return this._largeArcFlag;
    }

    constructor() { }

    ngOnInit() {
    }

    private getPiePiecePath(r1: number, r2: number, a1: number, a2: number): string {
        const x1 = r1 + r1 * Math.cos(a1);
        const y1 = r1 - r1 * Math.sin(a1);
        const x2 = r1 + r1 * Math.cos(a2);
        const y2 = r1 - r1 * Math.sin(a2);
        const x3 = r1 + r2 * Math.cos(a2);
        const y3 = r1 - r2 * Math.sin(a2);
        const x4 = r1 + r2 * Math.cos(a1);
        const y4 = r1 - r2 * Math.sin(a1);
        return `
            M ${x1} ${y1}
            A ${r1} ${r1}, 0, ${this._largeArcFlag}, 0, ${x2} ${y2}
            L ${x3} ${y3}
            A ${r2} ${r2}, 0, ${this._largeArcFlag}, 1, ${x4} ${y4}
            L ${x1} ${y1}
            Z
        `;
    }

}

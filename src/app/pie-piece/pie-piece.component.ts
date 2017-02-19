import {
    Component,
    OnInit,
    OnChanges,
    Input,
    ElementRef
} from '@angular/core';
import { PiePiece } from './pie-piece.model';

@Component({
    selector: '[app-pie-piece]',
    templateUrl: './pie-piece.component.html',
    styleUrls: ['./pie-piece.component.sass'],
})
export class PiePieceComponent implements OnInit, OnChanges {
    defaultColor: string = '#000000';
    defaultIntRadius: number;

    private _piePiece: PiePiece;
    private _largeArcFlag: number = 0;
    private _path: string;

    @Input() type: string;
    @Input() set piePiece(piePiece: PiePiece) {
        this._piePiece = piePiece;
        this.defaultIntRadius = this.defaultIntRadius || piePiece.intRadius;

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

    get piePiece(): PiePiece {
        return this._piePiece;
    }

    get path(): string {
        return this._path;
    }

    get fill(): string {
        return this._piePiece.color || this.defaultColor;
    }

    get largeArcFlag(): number {
        return this._largeArcFlag;
    }

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges() {
        // TODO: intRadius setter
        if (this.type === 'radialScale' && this.piePiece.intRadius > 0) {
            this.piePiece = new PiePiece(
                this.piePiece.extRadius,
                0,
                this.piePiece.startAngle,
                this.piePiece.finishAngle,
                this.piePiece.color
            );
        } else {
            this.piePiece = new PiePiece(
                this.piePiece.extRadius,
                this.defaultIntRadius,
                this.piePiece.startAngle,
                this.piePiece.finishAngle,
                this.piePiece.color
            );
        }
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

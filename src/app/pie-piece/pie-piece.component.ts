import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: '[app-pie-piece]',
    templateUrl: './pie-piece.component.html',
    styleUrls: ['./pie-piece.component.sass']
})
export class PiePieceComponent implements OnInit {
    @Input() extRadius: number;
    @Input() intRadius: number;
    @Input() startAngle: number;
    @Input() finishAngle: number;
    @Input() color: string;

    get path() {
        if (
            this.finishAngle - this.startAngle < 0 ||
            this.finishAngle - this.startAngle > 2 * Math.PI
        ) {
            console.log('not normal angles');
            return ``;
        }
        const x1 = this.extRadius + this.extRadius * Math.cos(this.startAngle);
        const y1 = this.extRadius - this.extRadius * Math.sin(this.startAngle);
        const x2 = this.extRadius + this.extRadius * Math.cos(this.finishAngle);
        const y2 = this.extRadius - this.extRadius * Math.sin(this.finishAngle);
        const x3 = this.extRadius + this.intRadius * Math.cos(this.finishAngle);
        const y3 = this.extRadius - this.intRadius * Math.sin(this.finishAngle);
        const x4 = this.extRadius + this.intRadius * Math.cos(this.startAngle);
        const y4 = this.extRadius - this.intRadius * Math.sin(this.startAngle);
        return `
            M ${x1} ${y1}
            A ${this.extRadius} ${this.extRadius}, 0, 0, 0, ${x2} ${y2}
            L ${x3} ${y3}
            A ${this.intRadius} ${this.intRadius}, 0, 0, 1, ${x4} ${y4}
            L ${x1} ${y1}
            Z
        `;
    }

    constructor() { }

    ngOnInit() {
    }

}

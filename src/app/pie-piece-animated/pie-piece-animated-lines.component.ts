import {
    Component,
    OnInit,
    Input,
    ElementRef,
    HostListener
} from '@angular/core';
import { PiePieceComponent } from '../pie-piece/pie-piece.component';
import { PiePiece } from '../pie-piece/pie-piece.model';

@Component({
    selector: '[app-pie-piece-animated-lines]',
    templateUrl: './pie-piece-animated.component.html',
    styleUrls: ['./pie-piece-animated.component.sass'],
})
export class PiePieceAnimatedLinesComponent extends PiePieceComponent implements OnInit {
    private x1: number;
    private x2: number;
    private y1: number;
    private y2: number;
    private x3: number;
    private y3: number;
    private rightSemicircle: boolean = true;

    @HostListener('mouseover')
    onMouseOver() {
        let elem = <SVGGElement>this.elementRef.nativeElement;
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d',
            `M ${this.x1} ${this.y1}
             L ${this.x2} ${this.y2}
             L ${this.x3} ${this.y3}
             `);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', 'black');
        path.setAttribute('stroke-width', '1.1');
        elem.appendChild(path);
    }

    @HostListener('mouseout')
    onMouseOut() {
        let elem = <SVGGElement>this.elementRef.nativeElement;
        elem.removeChild(elem.lastChild);
    }

    constructor(private elementRef: ElementRef) {
        super();
    }

    ngOnInit() {
        let alpha = this.piePiece.startAngle + (this.piePiece.finishAngle - this.piePiece.startAngle) / 2;
        if (alpha > Math.PI / 2 && alpha <= 3 * Math.PI / 2) {
            this.rightSemicircle = false;
        }
        this.x1 = this.piePiece.extRadius + this.piePiece.extRadius * Math.cos(alpha);
        this.y1 = this.piePiece.extRadius - this.piePiece.extRadius * Math.sin(alpha);
        this.x2 = (this.piePiece.extRadius) + (this.piePiece.extRadius + 75) * Math.cos(alpha);
        this.y2 = (this.piePiece.extRadius) - (this.piePiece.extRadius + 75) * Math.sin(alpha);
        this.x3 = this.rightSemicircle ?
            this.x2 + this.piePiece.extRadius / 2 :
            this.x2 - this.piePiece.extRadius / 2;
        this.y3 = this.y2;
    }
}

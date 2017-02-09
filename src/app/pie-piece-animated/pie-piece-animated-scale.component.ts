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
    selector: '[app-pie-piece-animated-scale]',
    templateUrl: './pie-piece-animated.component.html',
    styleUrls: ['./pie-piece-animated.component.sass'],
})
export class PiePieceAnimatedScaleComponent extends PiePieceComponent implements OnInit {

    @HostListener('mouseover')
    onMouseOver() {
        let elem = <SVGGElement>this.elementRef.nativeElement;
        elem.style.transition = 'transform .5s ease-out';
        elem.style.transformOrigin = `${this.piePiece.extRadius}px ${this.piePiece.extRadius}px`;
        elem.style.transform = 'scale(1.2)';
    }

    @HostListener('mouseout')
    onMouseOut() {
        let elem = <SVGGElement>this.elementRef.nativeElement;
        elem.style.transition = 'transform .5s ease-out';
        elem.style.transform = `scale(1.0)`;
    }

    constructor(private elementRef: ElementRef) {
        super();
    }

    ngOnInit() {
        // scale animated pie piece is always pied from center
        if (this.piePiece.intRadius > 0) {
            this.piePiece = new PiePiece(
                this.piePiece.extRadius,
                0,
                this.piePiece.startAngle,
                this.piePiece.finishAngle,
                this.piePiece.color
            )
        }
    }
}

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
    selector: '[app-pie-piece-animated]',
    templateUrl: './pie-piece-animated.component.html',
    styleUrls: ['./pie-piece-animated.component.sass'],
})
export class PiePieceAnimatedComponent extends PiePieceComponent implements OnInit {
    private _animateX: number;
    private _animateY: number;

    /**
     * Animation line length (in px) from sector edge along bisector
     * of angle between startAngle and finishAngle
     */
    @Input() bl: number;

    @HostListener('mouseover')
    onMouseOver() {
        (<SVGPathElement>this.elementRef.nativeElement)
            .style.transition = 'transform .5s ease-out';
        (<SVGPathElement>this.elementRef.nativeElement)
            .style.transform = `translate(${this._animateX}px, ${this._animateY}px)`;
    }

    @HostListener('mouseout')
    onMouseOut() {
        (<SVGPathElement>this.elementRef.nativeElement)
            .style.transition = 'transform .5s ease-out';
        (<SVGPathElement>this.elementRef.nativeElement)
            .style.transform = `translate(0px, 0px)`;
    }

    constructor(private elementRef: ElementRef) {
        super();
    }

    ngOnInit() {
        let alpha = this.piePiece.startAngle + (this.piePiece.finishAngle - this.piePiece.startAngle) / 2;
        this._animateX = this.bl * Math.cos(alpha);
        this._animateY = -this.bl * Math.sin(alpha);
    }
}

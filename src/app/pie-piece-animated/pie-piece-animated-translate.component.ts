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
    selector: '[app-pie-piece-animated-translate]',
    templateUrl: './pie-piece-animated.component.html',
    styleUrls: ['./pie-piece-animated.component.sass'],
})
export class PiePieceAnimatedTranslateComponent extends PiePieceComponent implements OnInit {
    private _animateX: number;
    private _animateY: number;

    /**
     * Animation line length (in px) from sector edge along bisector
     * of angle between startAngle and finishAngle
     */
    @Input() bl: number;

    @HostListener('mouseover')
    onMouseOver() {
        let elem = <SVGGElement>this.elementRef.nativeElement;
        elem.style.transition = 'transform .5s ease-out';
        elem.style.transform = `translate(${this._animateX}px, ${this._animateY}px)`;
    }

    @HostListener('mouseout')
    onMouseOut() {
        let elem = <SVGGElement>this.elementRef.nativeElement;
        elem.style.transition = 'transform .5s ease-out';
        elem.style.transform = `translate(0px, 0px)`;
    }

    constructor(private elementRef: ElementRef) {
        super();
    }

    ngOnInit() {
        let alpha = this.piePiece.startAngle + (this.piePiece.finishAngle - this.piePiece.startAngle) / 2;
        this._animateX = Math.round(this.bl * Math.cos(alpha));
        this._animateY = Math.round(-this.bl * Math.sin(alpha));
    }
}

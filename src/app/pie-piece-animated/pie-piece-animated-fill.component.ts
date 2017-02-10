import {
    Component,
    AfterViewInit,
    Input,
    ElementRef,
    HostListener,
    ViewChild
} from '@angular/core';
import { PiePieceComponent } from '../pie-piece/pie-piece.component';
import { PiePiece } from '../pie-piece/pie-piece.model';

@Component({
    selector: '[app-pie-piece-animated-fill]',
    templateUrl: './pie-piece-animated.component.html',
    styleUrls: ['./pie-piece-animated.component.sass'],
})
export class PiePieceAnimatedFillComponent extends PiePieceComponent implements AfterViewInit {
    @ViewChild('svgPath') svgPath;
    nativeElem: SVGPathElement;

    @HostListener('mouseover')
    onMouseOver() {
        this.nativeElem.style.transition = 'all .5s ease-out';
        this.nativeElem.style.stroke = this.fill;
        this.nativeElem.style.fillOpacity = '.4';
    }

    @HostListener('mouseout')
    onMouseOut() {
        this.nativeElem.style.transition = 'all .5s ease-out';
        this.nativeElem.style.stroke = 'black';
        this.nativeElem.style.fillOpacity = '1';
    }

    constructor() {
        super();
    }

    ngAfterViewInit() {
        this.nativeElem = <SVGPathElement>this.svgPath.nativeElement;
    }
}

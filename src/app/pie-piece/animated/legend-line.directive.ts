import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';
import { PiePiece } from '../pie-piece.model';

interface DirectiveConfig {
    piePiece: PiePiece;
    animation: any;
}

@Directive({ selector: '[animated-legend-line]' })
export class LegendLineDirective implements OnInit {
    @Input() dirConfig: DirectiveConfig;

    private _linePath: string;

    constructor(private el: ElementRef) {}

    @HostListener('mouseover') onMouseOver() {
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', this._linePath);

        let pathLen = path.getTotalLength();
        path.style.fill = 'none';
        path.style.stroke = 'black';
        path.style.strokeWidth = '1.1';
        path.style.strokeDasharray = `${pathLen} ${pathLen}`;
        path.style.strokeDashoffset = `${pathLen}`;

        this.el.nativeElement.parentElement.appendChild(path);

        path.getBoundingClientRect();
        path.style.transition = 'stroke-dashoffset .6s ease-out';
        path.style.strokeDashoffset = '0';
    }

    @HostListener('mouseout') onMouseOut() {
        let path = <SVGPathElement>this.el.nativeElement.parentElement.lastChild;
        let pathLen = path.getTotalLength();
        path.style.transition = 'stroke-dashoffset .6s ease-out';
        path.style.strokeDashoffset = `${pathLen}`;
        path.addEventListener('transitionend', () => {
            this.el.nativeElement.parentElement.removeChild(path);
        });
    }

    ngOnInit() {
        let sa = this.dirConfig.piePiece.startAngle;
        let fa = this.dirConfig.piePiece.finishAngle;
        let er = this.dirConfig.piePiece.extRadius;
        let pieceCenterAngle = sa + (fa - sa) / 2;
        this.setLinePath(sa, fa, er, pieceCenterAngle);
    }

    private setLinePath(sa: number, fa: number, er: number, pca: number) {
        let x1 = er + (er + er / 20) * Math.cos(pca);
        let y1 = er - (er + er / 20) * Math.sin(pca);
        let x2 = er + (er + er / 2) * Math.cos(pca);
        let y2 = er - (er + er / 2) * Math.sin(pca);
        let x3 = this.getLineDirection(pca) === 'right' ? x2 + er / 2 : x2 - er / 2;
        let y3 = y2;

        this._linePath = `M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3}`;
    }

    private getLineDirection(pca: number): 'left' | 'right' {
        if (pca > Math.PI / 2 && pca <= 3 * Math.PI / 2) {
            return 'left';
        } else {
            return'right';
        }
    }
}

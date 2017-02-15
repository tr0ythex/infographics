import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';
import { PiePiece } from '../pie-piece.model';

interface AnimationConfig {
    property: string;
    duration: string;
    ttf: string; // transition timing function
}

interface StyleConfig {
    fill: string;
    stroke: string;
    strokeWidth: string;
}

@Directive({ selector: '[animated-legend-line]' })
export class LegendLineDirective implements OnInit {
    @Input() piePiece: PiePiece;
    @Input() animationConfig: AnimationConfig;
    @Input() styleConfig: StyleConfig;

    private _linePath: SVGPathElement;

    constructor(private el: ElementRef) {}

    @HostListener('mouseover') onMouseOver() {
        this.el.nativeElement.parentElement.appendChild(this._linePath);
        // let browser render this path
        this._linePath.getBoundingClientRect();
        this._linePath.style.strokeDashoffset = '0';
    }

    @HostListener('mouseout') onMouseOut() {
        this._linePath.style.strokeDashoffset = `${this._linePath.getTotalLength()}`;
        this._linePath.addEventListener('transitionend', () => {
            this.el.nativeElement.parentElement.removeChild(this._linePath);
            this._linePath.removeEventListener('transitionend');
        });
    }

    ngOnInit() {
        let sa = this.piePiece.startAngle;
        let fa = this.piePiece.finishAngle;
        let er = this.piePiece.extRadius;
        let pieceCenterAngle = sa + (fa - sa) / 2;
        let d = this.getLinePath(sa, fa, er, pieceCenterAngle);

        this.createLinePath(d);
    }

    private getLinePath(sa: number, fa: number, er: number, pca: number): string {
        let x1 = er + (er + er / 20) * Math.cos(pca);
        let y1 = er - (er + er / 20) * Math.sin(pca);
        let x2 = er + (er + er / 2) * Math.cos(pca);
        let y2 = er - (er + er / 2) * Math.sin(pca);
        let x3 = this.getLineDirection(pca) === 'right' ? x2 + er / 2 : x2 - er / 2;
        let y3 = y2;

        return `M ${x1} ${y1} L ${x2} ${y2} L ${x3} ${y3}`;
    }

    private getLineDirection(pca: number): 'left' | 'right' {
        if (pca > Math.PI / 2 && pca <= 3 * Math.PI / 2) {
            return 'left';
        } else {
            return 'right';
        }
    }

    private createLinePath(d: string) {
        this._linePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        this._linePath.setAttribute('d', d);
        this._linePath.style.fill = this.styleConfig.fill;
        this._linePath.style.stroke = this.styleConfig.stroke;
        this._linePath.style.strokeWidth = this.styleConfig.strokeWidth;
        this._linePath.style.strokeDasharray = `${this._linePath.getTotalLength()} ${this._linePath.getTotalLength()}`;
        this._linePath.style.strokeDashoffset = `${this._linePath.getTotalLength()}`;
        this._linePath.style.transition = `
            ${this.animationConfig.property}
            ${this.animationConfig.duration}
            ${this.animationConfig.ttf}
        `;
    }
}

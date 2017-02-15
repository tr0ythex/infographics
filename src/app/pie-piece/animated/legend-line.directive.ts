import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';
import { PiePiece } from '../pie-piece.model';

interface DirectiveConfig {
    piePiece: PiePiece;
    animation: any;
}

@Directive({ selector: '[animated-legend-line]' })
export class LegendLineDirective implements OnInit {
    @Input() dirConfig: DirectiveConfig;

    private x1: number;
    private x2: number;
    private y1: number;
    private y2: number;
    private x3: number;
    private y3: number;
    private rightSemicircle: boolean = true;

    constructor(private el: ElementRef) {}

    @HostListener('mouseover') onMouseOver() {
        let elem = <SVGGElement>this.el.nativeElement;
        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d',
            `M ${this.x1} ${this.y1}
             L ${this.x2} ${this.y2}
             L ${this.x3} ${this.y3}`
        );
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', 'black');
        path.setAttribute('stroke-width', '1.1');
        elem.parentElement.appendChild(path);

        let pathLen = path.getTotalLength();
        path.style.strokeDasharray = `${pathLen} ${pathLen}`;
        path.style.strokeDashoffset = `${pathLen}`;
        path.getBoundingClientRect();
        path.style.transition = 'stroke-dashoffset .6s ease-out';
        path.style.strokeDashoffset = '0';
    }

    @HostListener('mouseout') onMouseOut() {
        let elem = <SVGGElement>this.el.nativeElement;
        let path = <SVGPathElement>elem.parentElement.lastChild;
        let pathLen = path.getTotalLength();
        path.style.transition = 'stroke-dashoffset .6s ease-out';
        path.style.strokeDashoffset = `${pathLen}`;
        path.addEventListener('transitionend', () => {
            elem.parentElement.removeChild(elem.parentElement.lastChild);
        });
    }

    ngOnInit() {
        let sa = this.dirConfig.piePiece.startAngle;
        let fa = this.dirConfig.piePiece.finishAngle;
        let er = this.dirConfig.piePiece.extRadius;
        let alpha = sa + (fa - sa) / 2;
        if (alpha > Math.PI / 2 && alpha <= 3 * Math.PI / 2) {
            this.rightSemicircle = false;
        }
        this.x1 = er + (er + er / 20) * Math.cos(alpha);
        this.y1 = er - (er + er / 20) * Math.sin(alpha);
        this.x2 = (er) + (er + er / 2) * Math.cos(alpha);
        this.y2 = (er) - (er + er / 2) * Math.sin(alpha);
        this.x3 = this.rightSemicircle ? this.x2 + er / 2 : this.x2 - er / 2;
        this.y3 = this.y2;
    }
}

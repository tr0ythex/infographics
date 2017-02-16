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

@Directive({ selector: '[animated-radial-move]' })
export class RadialMoveDirective implements OnInit {
    private _moveOverTranslate: string;
    private _moveOutTranslate: string;

    @Input() piePiece: PiePiece;
    @Input() animationConfig: AnimationConfig;
    @Input() styleConfig: StyleConfig;

    /**
     * Animated radial line length (in px) from sector edge along bisector
     * of angle between startAngle and finishAngle
     */
    @Input() radialLength: number;

    @HostListener('mouseover') onMouseOver() {
        this.el.nativeElement.style.transform = this._moveOverTranslate;
    }

    @HostListener('mouseout') onMouseOut() {
        this.el.nativeElement.style.transform = this._moveOutTranslate;
    }

    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.style.transition = `
            ${this.animationConfig.property}
            ${this.animationConfig.duration}
            ${this.animationConfig.ttf}
        `;

        let alpha = this.piePiece.startAngle + (this.piePiece.finishAngle - this.piePiece.startAngle) / 2;
        let x = Math.round(this.radialLength * Math.cos(alpha));
        let y = Math.round(-this.radialLength * Math.sin(alpha));
        this._moveOverTranslate = `translate(${x}px, ${y}px)`;
        this._moveOutTranslate = `translate(0px, 0px)`;
    }
}

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

@Directive({ selector: '[animated-radial-scale]' })
export class RadialScaleDirective implements OnInit {
    private _mouseOverScale: string;
    private _mouseOutScale: string;

    @Input() piePiece: PiePiece;
    @Input() animationConfig: AnimationConfig;
    @Input() scaleFactor: number;

    @HostListener('mouseover') onMouseOver() {
        this.el.nativeElement.style.transform = this._mouseOverScale;
    }

    @HostListener('mouseout') onMouseOut() {
        this.el.nativeElement.style.transform = this._mouseOutScale;
    }

    constructor(private el: ElementRef) {}

    ngOnInit() {
        this.el.nativeElement.style.transition = `
            ${this.animationConfig.property}
            ${this.animationConfig.duration}
            ${this.animationConfig.ttf}
        `;
        this.el.nativeElement.style.transformOrigin = `${this.piePiece.extRadius}px ${this.piePiece.extRadius}px`;
        this._mouseOverScale = `scale(${this.scaleFactor})`;
        this._mouseOutScale = `scale(1.0)`;
    }
}

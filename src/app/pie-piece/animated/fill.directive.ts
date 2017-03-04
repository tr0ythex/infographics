import { Directive, ElementRef, Input, HostListener, OnInit } from '@angular/core';
import { PiePiece } from '../pie-piece.model';

interface AnimationConfig {
    property: string;
    duration: string;
    ttf: string; // transition timing function
}

interface StyleConfig {
    fill: string;
    fillOpacity: string;
    stroke: string;
    strokeWidth: string;
}

@Directive({ selector: '[animated-fill]' })
export class FillDirective implements OnInit {
    @Input() piePiece: PiePiece;
    @Input() animationConfig: AnimationConfig;
    @Input() styleConfig: StyleConfig;

    constructor(private el: ElementRef) {}

    @HostListener('mouseover') onMouseOver() {
        this.el.nativeElement.style.stroke = this.el.nativeElement.style.fill;
        this.el.nativeElement.style.fillOpacity = this.styleConfig.fillOpacity;
    }

    @HostListener('mouseout') onMouseOut() {
        this.el.nativeElement.style.stroke = 'black';
        this.el.nativeElement.style.fillOpacity = '1';
    }

    ngOnInit() {
        this.el.nativeElement.style.transition = `
            ${this.animationConfig.property}
            ${this.animationConfig.duration}
            ${this.animationConfig.ttf}
        `;
    }

}

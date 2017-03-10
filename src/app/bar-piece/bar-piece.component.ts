import { Component, OnInit, Input } from '@angular/core';
import { BarPiece } from './bar-piece.model';

@Component({
    selector: '[app-bar-piece]',
    templateUrl: './bar-piece.component.html',
    styleUrls: ['./bar-piece.component.sass']
})
export class BarPieceComponent implements OnInit {
    @Input() barPiece: BarPiece;

    constructor() { }

    ngOnInit() {
    }

}

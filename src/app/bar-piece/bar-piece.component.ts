import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: '[app-bar-piece]',
    templateUrl: './bar-piece.component.html',
    styleUrls: ['./bar-piece.component.sass']
})
export class BarPieceComponent implements OnInit {
    @Input() barPiece: any;

    constructor() { }

    ngOnInit() {
    }

}

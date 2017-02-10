import { Component, OnInit } from '@angular/core';
import { InfoNumberColor } from './info/info.types';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    info: InfoNumberColor[] = [];
    extRadius: number = 150;
    intRadius: number = 100;
    animationType: string = 'translate';

    ngOnInit() {
        this.info = [
            {
                value: 13,
                color: '#AAA039'
            },
            {
                value: 24,
                color: '#562A72'
            },
            {
                value: 7,
                color: '#236267'
            },
            {
                value: 17,
                color: '#221858'
            }
        ];
    }
}

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

    ngOnInit() {
        this.info = [
            {
                value: 110,
                color: '#AAA039'
            },
            {
                value: 290,
                color: '#562A72'
            },
            {
                value: 54,
                color: '#236267'
            }
        ];
    }
}

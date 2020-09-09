import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-big-screen',
    templateUrl: './big-screen.component.html',
    styleUrls: ['./big-screen.component.less']
})
export class BigScreenComponent implements OnInit {

    dialogShow: Boolean = false;
    constructor() { }

    ngOnInit(): void {
    }

}

import { Component, OnInit } from '@angular/core';
// import { filter, map } from 'rxjs/operators';
// import { of, pipe } from 'rxjs';


@Component({
    selector: 'app-big-screen',
    templateUrl: './big-screen.component.html',
    styleUrls: ['./big-screen.component.less']
})
export class BigScreenComponent implements OnInit {

    dialogShow: Boolean = false;
    name: string = "kkk";
    constructor() { }

    ngOnInit(): void {
        // let nums = of(1, 2, 3, 4, 5, 6, 7).pipe(filter(n => n % 2 !== 0), map(n => n * 2));
        // nums.subscribe((a) => {
        //     console.log(a)
        // })
    }

}

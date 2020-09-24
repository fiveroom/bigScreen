import { Component, OnInit } from '@angular/core';
// import { filter, map } from 'rxjs/operators';
// import { of, pipe } from 'rxjs';


import { ScreenService } from '../screen.service';


@Component({
    selector: 'app-big-screen',
    templateUrl: './big-screen.component.html',
    styleUrls: ['./big-screen.component.less']
})
export class BigScreenComponent implements OnInit {

    dialogShow: Boolean = false;
    name: string = "kkk";

    constructor(private httpServer: ScreenService) { }

    ngOnInit(): void {
        // let nums = of(1, 2, 3, 4, 5, 6, 7).pipe(filter(n => n % 2 !== 0), map(n => n * 2));
        // nums.subscribe((a) => {
        //     console.log(a)
        // })
        this.httpServer.getScreenList({
            keyword: '',  // 数据源名称
            group: '',  // 数据源分类
            pageIndex: 0,
            pageSize: 10,
            orderBy: ''
        }).subscribe(res => {
            console.log(res)
        })
    }

    showCfg() {

    }

}

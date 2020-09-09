import { Component} from '@angular/core';

@Component({
    selector: 'app-page-not',
    //   templateUrl: './page-not.component.html',
    //   styleUrls: ['./page-not.component.less'],
    template: `<div class="box">
                <div class="box__con">404</div>
            </div>`,
    styles: [
        `
        .box {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .box__con{
            font-size: 20px;
            transform: scale(10);
        }
    `
    ]
})
export class PageNotComponent {}

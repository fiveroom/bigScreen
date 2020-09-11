import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NzButtonModule } from 'ng-zorro-antd/button';


import { ZDialogComponent } from './component/z-dialog/z-dialog.component';

@NgModule({
    declarations: [
        ZDialogComponent
    ],
    exports: [
        CommonModule,
        ZDialogComponent
    ],
    imports: [
        CommonModule,
        NzButtonModule
    ],
})
export class ZCommonModule { }

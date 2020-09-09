import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        CommonModule
    ],
})
export class ZCommonModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NzButtonModule } from 'ng-zorro-antd/button';


import { ScreenRoutingModule } from './screen-routing.module';
import { ZCommonModule } from '../../common/z-common.module';

import { ScreeListComponent } from './scree-list/scree-list.component';
import { BigScreenComponent } from './big-screen/big-screen.component';
import { MiniBoxComponent } from './mini-box/mini-box.component';


@NgModule({
    declarations: [ScreeListComponent, BigScreenComponent, MiniBoxComponent],
    imports: [
        CommonModule,
        ScreenRoutingModule,
        ZCommonModule,
        NzButtonModule
    ]
})
export class ScreenModule { }

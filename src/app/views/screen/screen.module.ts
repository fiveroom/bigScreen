import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';
// import { NzMessageModule } from 'ng-zorro-antd/message';

import { ScreenRoutingModule } from './screen-routing.module';
import { ZCommonModule } from '../../common/z-common.module';

import { ScreeListComponent } from './scree-list/scree-list.component';
import { BigScreenComponent } from './big-screen/big-screen.component';
import { MiniBoxComponent } from './mini-box/mini-box.component';


@NgModule({
    declarations: [ScreeListComponent, BigScreenComponent, MiniBoxComponent],
    imports: [
        CommonModule,
        OverlayModule,
        ScreenRoutingModule,
        ZCommonModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        NzButtonModule,
        // NzMessageModule
    ],
    providers: [
        NzMessageService
    ]
})
export class ScreenModule { }

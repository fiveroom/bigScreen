import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenRoutingModule } from './screen-routing.module';
import { ScreeListComponent } from './scree-list/scree-list.component';
import { BigScreenComponent } from './big-screen/big-screen.component';


@NgModule({
  declarations: [ScreeListComponent, BigScreenComponent],
  imports: [
    CommonModule,
    ScreenRoutingModule
  ]
})
export class ScreenModule { }

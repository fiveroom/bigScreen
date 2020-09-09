import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BigScreenComponent } from './big-screen/big-screen.component';

const routes: Routes = [
    { path: 'bigScreen', component: BigScreenComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ScreenRoutingModule { }

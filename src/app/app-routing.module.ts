import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotComponent } from './views/page-not/page-not.component';

const routes: Routes = [
    { path: '', redirectTo: '/bigScreen', pathMatch: 'full' },
    { path: '**', component: PageNotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import AntDesign from './antDesign';

import { ScreenModule } from './views/screen/screen.module';
import { AppRoutingModule } from './app-routing.module';
// import { ZCommonModule } from './common/z-common.module';

import { AppComponent } from './app.component';
import { PageNotComponent } from './views/page-not/page-not.component';

@NgModule({
    declarations: [
        AppComponent,
        PageNotComponent
        // ZDialogComponent
    ],
    imports: [
        ...AntDesign,
        // ZCommonModule,
        BrowserModule,
        ScreenModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

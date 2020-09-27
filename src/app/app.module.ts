import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
// import AntDesign from './antDesign';
// import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { ScreenModule } from './views/screen/screen.module';
import { AppRoutingModule } from './app-routing.module';
import { ZCommonModule } from './common/z-common.module';

import { AppComponent } from './app.component';
import { PageNotComponent } from './views/page-not/page-not.component';

import { httpInterceptorProviders } from './http-interceptors/index';


@NgModule({
    declarations: [
        AppComponent,
        PageNotComponent
    ],
    imports: [
        // ...AntDesign,
        ZCommonModule,
        BrowserModule,
        ScreenModule,
        AppRoutingModule,
        HttpClientModule,
        NzButtonModule
        // BrowserAnimationsModule,
        // NoopAnimationsModule,
        // NzMessageModule
    ],
    providers: [
        httpInterceptorProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

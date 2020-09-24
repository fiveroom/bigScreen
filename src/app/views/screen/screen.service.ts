import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { IreqCanvasList } from '../../interCfg/canvas';

@Injectable({
    providedIn: 'root'
})
export class ScreenService {

    constructor(private http: HttpClient) { }

    getScreenList(reqPara: IreqCanvasList): Observable<any> {
        return this.http.post('/service/ReportSvrSvr.svrx/GetReportCanvasList', reqPara)
    }

}

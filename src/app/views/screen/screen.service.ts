import { Injectable } from '@angular/core';

import {ExHttpService} from '../../common/service/ex-http.service';
import {IResponese} from '../../interCfg/httpcfg';

import { IreqCanvasList } from '../../interCfg/canvas';

@Injectable({
    providedIn: 'root'
})
export class ScreenService {

    constructor(private http: ExHttpService) { }

    getScreenList(reqPara: IreqCanvasList): Promise<IResponese> {
        return this.http.postEx('/service/ReportSvrSvr.svrx/GetReportCanvasList', reqPara)
    }

}

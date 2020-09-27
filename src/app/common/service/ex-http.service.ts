import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { IResponese } from '../../interCfg/httpcfg';

import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
    providedIn: 'root'
})
export class ExHttpService {

    constructor(private http: HttpClient, private nzMsg: NzMessageService) { }

    postEx(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | string[];
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Promise<IResponese>;
    postEx<T>(url: string, body: any | null, options: {}): Promise<T>;

    postEx(url, body, options): any {
        return new Promise((resolve, reject) => {
            if (!options) {
                this.http.post(url, body).subscribe((res: IResponese) => {
                    if (res.ErrorCode == 0) {
                        resolve(res)
                    } else {
                        // this.nzMsg.error(res.Message, {
                        //     nzDuration: 1000,
                        //     nzAnimate: true
                        // })
                        reject(res)
                    }
                })
            } else {
                this.http.post(url, body, options).subscribe((res: any) => {
                    resolve(res)
                })
            }
        })
    }

    dealErr(err: HttpErrorResponse) {
        let res = new HttpResponse<any>({
            body: {
                Data: null,
                Message: err.message,
                ErrorCode: -1
            }
        });
        return of(res)
    }

}

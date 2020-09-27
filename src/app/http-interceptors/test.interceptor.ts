import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let req = null;
        let method = request.method.toLowerCase()
        if (method == 'post') {
            req = request.clone({
                body: objToFromData(Object.assign({}, request.body, { 'token': '------token------' })),
                headers: request.headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8')
            })
        } else if (method == 'get') {
            req = request.clone({
                params: request.params.set('token', '------token------')
            });
        }
        return next.handle(req);
    }
}

function objToFromData(obj): string {
    return Object.entries(obj).map((it: any[]) =>
        `${encodeURIComponent(it[0])}=${encodeURIComponent(it[1])}`
    ).join('&')
}


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

        let paramsWithToken = request.params.set('token', '------token------')
        // let bodyWithToken = request.body
        let req = request.clone({
            params: paramsWithToken
        });
        return next.handle(req);
    }
}

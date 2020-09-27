import { Injectable, InjectionToken, Inject } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

export const BASE_API_URL = new InjectionToken<string>('BASE API URL')

@Injectable()
export class BaseInterceptor implements HttpInterceptor {

    constructor(@Inject(BASE_API_URL) private baseUrl: string) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let req = request.clone({
            url: this.baseUrl + request.url,
            withCredentials : true,
        });
        return next.handle(req);
    }
}

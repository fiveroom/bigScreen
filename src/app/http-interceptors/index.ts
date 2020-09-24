import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TestInterceptor } from './test.interceptor'
import { BaseInterceptor, BASE_API_URL } from './base.interceptor'

import { environment } from '../../environments/environment';

export const httpInterceptorProviders = [
    { provide: BASE_API_URL, useValue: environment.baseUrl },
    { provide: HTTP_INTERCEPTORS, useClass: BaseInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true }
]

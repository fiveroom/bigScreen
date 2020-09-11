import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const CONFIGURL = "assets/config.json"

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    baseUrl: string;

    constructor(private http: HttpClient) { }

    getConfig(){
        return this.http.get(CONFIGURL);
    }

}

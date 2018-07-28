import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Login } from './login';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) { }

    authenticateUserUrl = '/api/security/login';

    authenticateUser(obj: Login): Observable<any> {
        const headers = new HttpHeaders();
        return this.http.post<any>(this.authenticateUserUrl, obj, { headers });
    }
}


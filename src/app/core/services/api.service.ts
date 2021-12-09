import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { catchError, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(private http: HttpClient) { }

    get<T>() {
        return this.http.get<T>(`angularTest`).pipe(map((response: T) => response),
            catchError(error => {
                return throwError(error);
            }))
    }
}
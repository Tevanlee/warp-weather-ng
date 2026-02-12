import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private baseUrl = environment.weatherApiBaseUrl;
  private apiKey = environment.weatherApiKey;

  fetch<T>(endpoint: string, params?: Record<string, string | number>): Observable<T> {
    let httpParams = new HttpParams().set('appid', this.apiKey);

    if (params) {
      Object.keys(params).forEach((key) => {
        httpParams = httpParams.set(key, params[key].toString());
      });
    }

    return this.http.get<T>(`${this.baseUrl}/${endpoint}`, { params: httpParams }).pipe(
      catchError((err) => {
        return throwError(() => new Error('API error'));
      }),
    );
  }
}

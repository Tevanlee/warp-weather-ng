import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../../core/api/api.service';
import { Observable } from 'rxjs';
import { LatLong } from '../types/weather.types';

@Injectable({
  providedIn: 'root',
})
export class Coordinates {
  private api = inject(ApiService);

  getLatAndLong(city: string): Observable<LatLong[]> {
    return this.api.fetch<LatLong[]>('geo/1.0/direct', {
      q: city,
      limit: 1,
    });
  }
}

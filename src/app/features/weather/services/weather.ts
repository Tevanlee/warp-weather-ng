import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

import { ApiService } from '../../../core/api/api.service';
import { Weather, WeatherApiResponse, LatLong } from '../types/weather.types';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private api = inject(ApiService);

  getWeatherByCoords(coords: LatLong | null): Observable<Weather> {
    if (!coords) {
      throw new Error('Coordinates are required');
    }
    return this.api
      .fetch<WeatherApiResponse>('data/2.5/weather', {
        lat: coords.lat,
        lon: coords.lon,
        units: 'metric',
      })
      .pipe(
        map(
          (data): Weather => ({
            city: data.name,
            temperature: Math.round(data.main.temp),
            feelsLike: data.main.feels_like,
            condition: data.weather[0].main,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            wind: Math.round(data.wind.speed),
            humidity: Math.round(data.main.humidity),
          }),
        ),
      );
  }
}

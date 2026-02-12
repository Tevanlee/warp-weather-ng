import { Component, inject, signal, DestroyRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { switchMap, of, catchError, finalize } from 'rxjs';

import { Coordinates } from '../../features/weather/services/coordinates';
import { WeatherService } from '../../features/weather/services/weather';
import { Weather } from '../../features/weather/types/weather.types';

import { SearchComponent, ResultsComponent } from '../../features/weather/components';

import { Wrapper } from '../../components/base';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, FormsModule, Wrapper, SearchComponent, ResultsComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private coordsService = inject(Coordinates);
  private weatherService = inject(WeatherService);
  private destroyRef = inject(DestroyRef);

  // UI State
  city = signal('');
  weather = signal<Weather | null>(null);
  loading = signal(false);
  error = signal<Error | null>(null);

  setCity(value: string) {
    this.city.set(value);
  }

  search() {
    const city = this.city().trim();

    if (!city) {
      return this.error.set(new Error('City is required'));
    }

    this.loading.set(true);
    this.error.set(null);
    this.weather.set(null);

    this.coordsService
      .getLatAndLong(city)
      .pipe(
        switchMap((coords) => {
          const coord = coords[0];

          if (!coord) {
            throw new Error('City not found');
          }

          return this.weatherService.getWeatherByCoords(coord);
        }),
        catchError((err: Error) => {
          this.loading.set(false);
          this.error.set(err);
          return of(null);
        }),
        finalize(() => {
          this.loading.set(false);
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe({
        next: (result) => {
          if (result) {
            this.weather.set(result);
          }
        },
      });
  }

  onSearch() {
    this.search();
  }
}

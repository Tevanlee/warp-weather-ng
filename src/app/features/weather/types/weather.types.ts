/**
 * These types improve DX and make our codebase type safe as we have full awareness of the data we're working with.
 */

export interface WeatherApiResponse {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  sys: {
    country: string;
  };
}

export interface Weather {
  city: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  description: string;
  icon: string;
  wind: number;
  humidity: number;
}

export interface LatLong {
  lat: number;
  lon: number;
}

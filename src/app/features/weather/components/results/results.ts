import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Navigation, Wind, Droplet } from 'lucide-angular';

import { Card, Text, ErrorComponent } from '../../../../components/base';

import { Weather } from '../../types/weather.types';

@Component({
  selector: 'app-results',
  imports: [CommonModule, LucideAngularModule, Card, Text, ErrorComponent],
  templateUrl: './results.html',
  styleUrl: './results.scss',
})
export class ResultsComponent {
  @Input() weather: Weather | null = null;
  @Input() error: Error | null = null;

  readonly NavigationIcon = Navigation;
  readonly WindIcon = Wind;
  readonly HumIcon = Droplet;
}

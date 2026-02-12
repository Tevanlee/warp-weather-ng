import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Text } from '../';

@Component({
  selector: 'app-error',
  imports: [CommonModule, Text],
  templateUrl: './error.html',
  styleUrl: './error.scss',
})
export class ErrorComponent {
  @Input() value = '';
}

import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, LoaderCircle } from 'lucide-angular';

@Component({
  selector: 'app-button',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  @Input() class = '';
  @Input() loading = false;

  readonly Loader = LoaderCircle;
}

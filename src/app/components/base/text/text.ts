import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text',
  imports: [CommonModule],
  templateUrl: './text.html',
  styleUrl: './text.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Text {
  @Input() class = '';
  @Input() loading = false;
}

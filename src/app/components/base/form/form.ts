import { Component, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  @Input() class = '';
  @Input() submit = new EventEmitter<void>();

  onSubmit(event: Event) {
    event.preventDefault();
    this.submit.emit();
  }
}

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Search } from 'lucide-angular';

import { FormComponent, InputComponent, Button } from '../../../../components/base';

@Component({
  selector: 'app-search',
  imports: [CommonModule, LucideAngularModule, FormComponent, InputComponent, Button],
  templateUrl: './search.html',
  styleUrl: './search.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  @Input() city: string = '';
  @Input() isLoading = false;
  @Input() error: Error | null = null;

  @Output() cityChange = new EventEmitter<string>();
  @Output() search = new EventEmitter<void>();

  readonly SearchIcon = Search;

  onCityChange(value: string) {
    this.cityChange.emit(value);
  }

  onSubmit() {
    this.search.emit();
  }
}

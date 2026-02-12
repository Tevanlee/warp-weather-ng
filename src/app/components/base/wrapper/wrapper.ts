import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wrapper',
  imports: [CommonModule],
  templateUrl: './wrapper.html',
  styleUrl: './wrapper.scss',
})
export class Wrapper {
  @Input() class = '';
}

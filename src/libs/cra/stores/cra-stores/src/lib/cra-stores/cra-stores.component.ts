import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cra-stores.component.html',
  styleUrl: './cra-stores.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CraStoresComponent {}

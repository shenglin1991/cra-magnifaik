import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cra-feature-cra-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cra-feature.component.html',
  styleUrl: './cra-feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CraFeatureComponent {}

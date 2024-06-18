import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CraTableComponent } from '../cra-table/cra-table.component';
import { CraStoresCoreModule } from '@cra/stores';

@Component({
  selector: 'cra-feature-core',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    CraTableComponent,
    CraStoresCoreModule,
  ],
  templateUrl: './cra-feature.component.html',
  styleUrl: './cra-feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CraFeatureComponent {}

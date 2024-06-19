import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, DatePipe, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CraTableComponent } from '../cra-table/cra-table.component';
import { CraStoresCoreModule } from '@cra/stores';
import { FacadeService } from '../facade.service';
import { Observable } from 'rxjs';
import { CraTableVM } from '@cra/models';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'cra-feature-core',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CraTableComponent,
    CraStoresCoreModule,
    AsyncPipe,
    DatePipe,
    NgIf,
  ],
  templateUrl: './cra-feature.component.html',
  styleUrl: './cra-feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CraFeatureComponent implements OnInit {

  private facade = inject(FacadeService);

  public vm$: Observable<CraTableVM> = this.facade.getCraTableVM();
  
  public ngOnInit(): void {
    this.facade.initEmployees();
    this.facade.initProjects();
  }
}

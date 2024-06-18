import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { AsyncPipe, CommonModule, DatePipe, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CraTableComponent } from '../cra-table/cra-table.component';
import { CraStoresCoreModule } from '@cra/stores';
import { FacadeService } from '../facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cra-feature-core',
  standalone: true,
  imports: [
    MatCardModule,
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
  
  public currentCalendar$: Observable<Date> = this.facade.getCurrentCalendar();
  public currentMonthDays$: Observable<number> = this.facade.getCurrentMonthDays();
  
  public ngOnInit(): void {
    this.facade.initEmployees();
    this.facade.initProjects();
  }
}

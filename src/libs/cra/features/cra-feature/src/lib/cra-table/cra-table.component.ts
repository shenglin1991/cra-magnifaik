import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CraTableVM, Employee } from '@cra/models';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FacadeService } from '../facade.service';

@Component({
  selector: 'cra-feature-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './cra-table.component.html',
  styleUrl: './cra-table.component.scss',
})
export class CraTableComponent implements OnInit, OnChanges {
  @Input() public vm!: CraTableVM;
  public fixedColumns: string[] = ['id', 'name', 'paidLeave'];
  public displayedColumns: string[] = ['id', 'name', 'paidLeave'];

  private facade = inject(FacadeService);

  public ngOnInit(): void {
    this.setUpDisplayedColumns();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    this.setUpDisplayedColumns();
  }

  public onAssignmentChange(event: MatSelectChange, employee: Employee, date: string): void {
    this.facade.assignProjectToEmployee(employee.id, event.value, date);
  }

  public formColor(projectId: number | null): string {
    switch (projectId) {
      case 0:
        return 'yellow';
      case 1:
        return 'blue';
      case 2:
        return 'green';
      default:
        return 'grey';
    }
  }

  private setUpDisplayedColumns(): void {
    this.displayedColumns = [
      ...this.fixedColumns,
      ...this.vm.monthColumns.map(mc => mc.label),
    ]
  }
}

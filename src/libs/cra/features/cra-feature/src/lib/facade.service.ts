import { Injectable } from '@angular/core';
import { CraTableVM } from '@cra/models';
import { employeesActions, projectsActions, selectCraViewModel } from '@cra/stores';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacadeService {

  constructor(private store: Store) { }

  public initEmployees(): void {
    this.store.dispatch(employeesActions.allEmployeeRequested());
  }

  public initProjects(): void {
    this.store.dispatch(projectsActions.allProjectsRequested());
  }

  public getCraTableVM(): Observable<CraTableVM> {
    return this.store.select(selectCraViewModel);
  }

  public assignProjectToEmployee(employeeId: number, projectId: number, date: string): void {
    this.store.dispatch(employeesActions.assignProjectToEmployee({ employeeId, projectId, date }))
  }
}

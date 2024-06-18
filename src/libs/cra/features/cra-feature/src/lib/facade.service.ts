import { Injectable } from '@angular/core';
import { craSelectors, employeesActions, projectsActions } from '@cra/stores';
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

  public getCurrentCalendar(): Observable<Date> {
    return this.store.select(craSelectors.selectCurrentCalendar);
  }

  public getCurrentMonthDays(): Observable<number> {
    return this.store.select(craSelectors.selectCurrentMonthDays);
  }
}

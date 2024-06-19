import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, throwError } from 'rxjs';
import { employeesActions } from '../actions/employee.actions';
import { Employee } from '@cra/models';

@Injectable()
export class CraEmployeeEffects {
  public loadAllEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(employeesActions.allEmployeeRequested),
      mergeMap(() =>
        of([{
          id: 1,
          firstname: 'Harry',
          lastname: 'Potter',

          paidLeave: 7,
          assignment: {},
        }, {
          id: 2,
          firstname: 'Ron',
          lastname: 'weasley',

          paidLeave: 7,
          assignment: {},
        }, {
          id: 3,
          firstname: 'Hermione',
          lastname: 'Granger',

          paidLeave: 7,
          assignment: {},
        }])
      ),
      map((employees: Employee[]) => employeesActions.allEmployeesLoaded({ employees })),
      catchError((err: any) => {
        console.log('an error occurs loading employees', err);
        return throwError(() => err);
      }),
    ),
  );

  constructor(
    private actions$: Actions,
  ) {}
}

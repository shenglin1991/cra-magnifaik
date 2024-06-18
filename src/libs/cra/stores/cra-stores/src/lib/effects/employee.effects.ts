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
          fistname: 'Harry',
          lastname: 'Potter',

          paidLeave: 7,
        }, {
          id: 2,
          fistname: 'Ron',
          lastname: 'weasley',

          paidLeave: 7,
        }, {
          id: 3,
          fistname: 'Hermione',
          lastname: 'Granger',

          paidLeave: 7,
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

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, throwError } from 'rxjs';
import { projectsActions } from '../actions/project.actions';
import { Project } from '@cra/models';

@Injectable()
export class CraProjectEffects {
  public loadAllProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(projectsActions.allProjectsRequested),
      mergeMap(() =>
        of([{
          id: 1,
          name: 'CRA Magnifaik'
        }, {
          id: 2,
          name: 'Another project'
        }])
      ),
      map((projects: Project[]) => projectsActions.allProjectsLoaded({ projects })),
      catchError((err: any) => {
        console.log('an error occurs loading projects', err);
        return throwError(() => err);
      }),
    ),
  );

  constructor(
    private actions$: Actions,
  ) {}
}

import { createSelector } from '@ngrx/store';
import { selectProjectState } from './core.selectors';
import { ICraProjectState } from '../reducers/project.reducer';

export const selectAllProjects = createSelector(selectProjectState, (state: ICraProjectState) => state.projects);
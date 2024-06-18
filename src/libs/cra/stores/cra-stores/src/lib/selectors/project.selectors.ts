import { createSelector } from '@ngrx/store';
import { selectProjectState } from './core.selectors';
import { projectAdapterSelectors } from '../reducers/project.reducer';

const selectAllProjects = createSelector(selectProjectState, projectAdapterSelectors.selectAll);

export const sportsSelectors = {
  selectAllProjects,
};

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { projectsActions } from '../actions/project.actions';
import { Project } from '@cra/models';

export const craProjectFeatureKey = 'cra-project';

export type ICraProjectState = EntityState<Project>;

export const projectAdapter: EntityAdapter<Project> = createEntityAdapter<Project>({
  selectId : (project) => project.id,
});

export const initialProjectState: ICraProjectState = projectAdapter.getInitialState({});

const reducer = createReducer(
  initialProjectState,
  on(projectsActions.allProjectsLoaded, (state: ICraProjectState, action: { projects: Project[] }) =>
    projectAdapter.setAll(action.projects, {
      ...state,
    }),
  ),
);

export function craProjectsReducer(state: ICraProjectState = initialProjectState, action: Action): ICraProjectState {
  return reducer(state, action);
}

const { selectAll, selectEntities, selectIds, selectTotal } = projectAdapter.getSelectors();

export const projectAdapterSelectors = {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
};

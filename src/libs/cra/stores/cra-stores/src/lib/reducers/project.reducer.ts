import { createReducer, on } from '@ngrx/store';
import { projectsActions } from '../actions/project.actions';
import { Project } from '@cra/models';
import { produce } from 'immer';

export const craProjectFeatureKey = 'cra-project';

export interface ICraProjectState {
  projects: Project[];
};

export const initialProjectState: ICraProjectState = {
  projects: [],
};

export const craProjectsReducer = createReducer(
  initialProjectState,
  on(projectsActions.allProjectsLoaded, produce((state: ICraProjectState, { projects }: { projects: Project[] }) => {
    state.projects = projects;
  })),
);

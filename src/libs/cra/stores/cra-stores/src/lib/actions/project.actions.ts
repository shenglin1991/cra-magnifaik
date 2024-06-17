import { Project } from '@cra/models';
import { createAction, props } from '@ngrx/store';

const prefix = '[CRA Project]';

const allProjectsRequested = createAction(`${prefix} All Projects Requested`);

const allProjectsLoaded = createAction(
  `${prefix} All Projects Loaded`,
  props<{ projects: Project[] }>(),
);

export const projectsActions = {
  allProjectsRequested,
  allProjectsLoaded,
};

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICraCoreState, craCoreFeatureKey } from '../reducers/core.reducer';
import { craEmployeeFeatureKey } from '../reducers/employee.reducer';
import { craProjectFeatureKey } from '../reducers/project.reducer';

export const selectCraState = createFeatureSelector<ICraCoreState>(craCoreFeatureKey);

export const selectEmployeeState = createSelector(selectCraState, (state: ICraCoreState) => state[craEmployeeFeatureKey]);

export const selectProjectState = createSelector(selectCraState, (state: ICraCoreState) => state[craProjectFeatureKey]);


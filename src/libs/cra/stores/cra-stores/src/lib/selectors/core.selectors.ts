import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICraCoreState, craCoreFeatureKey } from '../reducers/core.reducer';
import { craEmployeeFeatureKey } from '../reducers/employee.reducer';

export const selectCraState = createFeatureSelector<ICraCoreState>(craCoreFeatureKey);

export const selectEmployeesState = createSelector(selectCraState, (state: ICraCoreState) => state[craEmployeeFeatureKey]);


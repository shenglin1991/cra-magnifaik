import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICraCoreState, craCoreFeatureKey } from '../reducers/core.reducer';
import { craEmployeeFeatureKey } from '../reducers/employee.reducer';
import { craProjectFeatureKey } from '../reducers/project.reducer';
import { craFeatureKey, ICraFeatureState } from '../reducers/cra.reducer';

export const selectCraState = createFeatureSelector<ICraCoreState>(craCoreFeatureKey);

export const selectEmployeeState = createSelector(selectCraState, (state: ICraCoreState) => state[craEmployeeFeatureKey]);

export const selectProjectState = createSelector(selectCraState, (state: ICraCoreState) => state[craProjectFeatureKey]);

export const selectFeatureState = createSelector(selectCraState, (state: ICraCoreState) => state[craFeatureKey]);

/** Selectors of feature */

const selectCurrentCalendar = createSelector(selectFeatureState, (state: ICraFeatureState) => new Date(state.currentYear, state.currentMonth, 1));
const selectCurrentMonthDays = createSelector(selectFeatureState, (state: ICraFeatureState) => new Date(state.currentYear, state.currentMonth, 0).getDate());

export const craSelectors = {
    selectCurrentCalendar,
    selectCurrentMonthDays,
};
  

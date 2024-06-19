import { createSelector } from '@ngrx/store';
import { ICraEmployeeState } from '../reducers/employee.reducer';
import { selectEmployeeState } from './core.selectors';

export const selectAllEmployees = createSelector(
  selectEmployeeState,
  (state: ICraEmployeeState) => state.employees,
);

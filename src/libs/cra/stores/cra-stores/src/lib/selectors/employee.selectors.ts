import { createSelector } from '@ngrx/store';
import { employeeAdapterSelectors } from '../reducers/employee.reducer';
import { selectEmployeesState } from './core.selectors';

const selectAllEmployees = createSelector(selectEmployeesState, employeeAdapterSelectors.selectAll);
const selectEmployeesEntities = createSelector(selectEmployeesState, employeeAdapterSelectors.selectEntities);

export const sportsSelectors = {
  selectAllEmployees,
  selectEmployeesEntities,
};

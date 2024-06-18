import { createSelector } from '@ngrx/store';
import { employeeAdapterSelectors } from '../reducers/employee.reducer';
import { selectEmployeeState } from './core.selectors';

const selectAllEmployees = createSelector(selectEmployeeState, employeeAdapterSelectors.selectAll);
const selectEmployeesEntities = createSelector(selectEmployeeState, employeeAdapterSelectors.selectEntities);

export const sportsSelectors = {
  selectAllEmployees,
  selectEmployeesEntities,
};

import { Employee } from '@cra/models';
import { createAction, props } from '@ngrx/store';

const prefix = '[CRA Employee]';

const allEmployeeRequested = createAction(`${prefix} All Employees Requested`);

const allEmployeesLoaded = createAction(
  `${prefix} All Employees Loaded`,
  props<{ employees: Employee[] }>(),
);

export const employeesActions = {
  allEmployeeRequested,
  allEmployeesLoaded,
};

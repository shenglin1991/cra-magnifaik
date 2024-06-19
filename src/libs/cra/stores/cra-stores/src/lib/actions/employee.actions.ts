import { Employee } from '@cra/models';
import { createAction, props } from '@ngrx/store';

const prefix = '[CRA Employee]';

const allEmployeeRequested = createAction(`${prefix} All Employees Requested`);

const allEmployeesLoaded = createAction(
  `${prefix} All Employees Loaded`,
  props<{ employees: Employee[] }>(),
);

const assignProjectToEmployee = createAction(
  `${prefix} Assign project to employee`,
  props<{ employeeId: number; projectId: number; date: string }>(),
);

export const employeesActions = {
  allEmployeeRequested,
  allEmployeesLoaded,
  assignProjectToEmployee,
};

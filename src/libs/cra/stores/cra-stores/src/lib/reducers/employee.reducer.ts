import { createReducer, on } from '@ngrx/store';
import { employeesActions } from '../actions/employee.actions';
import { Employee } from '@cra/models';
import { produce } from 'immer';

export const craEmployeeFeatureKey = 'cra-employee';

export interface ICraEmployeeState {
  employees: Employee[];
}

export const initialEmployeeState: ICraEmployeeState = {
  employees: []
};

export const craEmployeesReducer = createReducer(
  initialEmployeeState,
  on(employeesActions.allEmployeesLoaded, produce((state: ICraEmployeeState, { employees }: { employees: Employee[] }) => {
    state.employees = employees;
  }
  )),
  on(employeesActions.assignProjectToEmployee, produce(
    ( state: ICraEmployeeState,
      { employeeId, projectId, date }: { employeeId: number; projectId: number; date: string }) => {
    let employee = state.employees.find(e => e.id === employeeId);
    if ( employee ) {
      if (projectId === 0 ) {
        employee.paidLeave -= 1;
      } else if (employee.assignment[date] === 0) {
        employee.paidLeave += 1;
      }
      employee.assignment[date] = projectId;
    }
  })),
);


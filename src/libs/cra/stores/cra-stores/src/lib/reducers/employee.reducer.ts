import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { employeesActions } from '../actions/employee.actions';
import { Employee } from '@cra/models';

export const craEmployeeFeatureKey = 'cra-employee';

export type ICraEmployeeState = EntityState<Employee>;

export const employeeAdapter: EntityAdapter<Employee> = createEntityAdapter<Employee>({
  selectId : (employee) => employee.id,
});

export const initialEmployeeState: ICraEmployeeState = employeeAdapter.getInitialState({});

const reducer = createReducer(
  initialEmployeeState,
  on(employeesActions.allEmployeesLoaded, (state: ICraEmployeeState, action: { employees: Employee[] }) =>
    employeeAdapter.setAll(action.employees, {
      ...state,
    }),
  ),
);

export function craEmployeesReducer(state: ICraEmployeeState = initialEmployeeState, action: Action): ICraEmployeeState {
  return reducer(state, action);
}

const { selectAll, selectEntities, selectIds, selectTotal } = employeeAdapter.getSelectors();

export const employeeAdapterSelectors = {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
};

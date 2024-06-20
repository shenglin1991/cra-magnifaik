import { craEmployeesReducer, initialEmployeeState, ICraEmployeeState } from './employee.reducer';
import { employeesActions } from '../actions/employee.actions';
import { Employee } from '@cra/models';

describe('CRA Employees Reducer', () => {
  const mockEmployees: Employee[] = [
    { id: 1, firstname: 'Alice', lastname: 'Foo', paidLeave: 10, assignment: {} },
    { id: 2, firstname: 'Bob', lastname: 'Bar', paidLeave: 5, assignment: {} },
  ];

  it('should load all employees when allEmployeesLoaded action is passed', () => {
    const action = employeesActions.allEmployeesLoaded({ employees: mockEmployees });
    const state = craEmployeesReducer(initialEmployeeState, action);
    expect(state).toEqual({ employees: mockEmployees });
  });

  it('should assign a project to an employee', () => {
    const initialState: ICraEmployeeState = { employees: [...mockEmployees] };
    const action = employeesActions.assignProjectToEmployee({ employeeId: 1, projectId: 101, date: '2024-06-20' });
    const state = craEmployeesReducer(initialState, action);

    expect(state.employees[0].assignment['2024-06-20']).toEqual(101);
    expect(state.employees[0].paidLeave).toEqual(10);
  });

  it('should decrement paidLeave when projectId is 0', () => {
    const initialState: ICraEmployeeState = { employees: [...mockEmployees] };
    const action = employeesActions.assignProjectToEmployee({ employeeId: 1, projectId: 0, date: '2024-06-20' });
    const state = craEmployeesReducer(initialState, action);

    expect(state.employees[0].assignment['2024-06-20']).toEqual(0);
    expect(state.employees[0].paidLeave).toEqual(9);
  });

  it('should increment paidLeave when projectId is not 0 and previous projectId was 0', () => {
    const initialState: ICraEmployeeState = {
      employees: [
        { id: 1, firstname: 'Alice', lastname: 'Foo', paidLeave: 10, assignment: { '2024-06-20': 0 } },
        { id: 2, firstname: 'Bob', lastname: 'Bar', paidLeave: 5, assignment: {} },
      ]
    };
    const action = employeesActions.assignProjectToEmployee({ employeeId: 1, projectId: 101, date: '2024-06-20' });
    const state = craEmployeesReducer(initialState, action);

    expect(state.employees[0].assignment['2024-06-20']).toEqual(101);
    expect(state.employees[0].paidLeave).toEqual(11);
  });
});

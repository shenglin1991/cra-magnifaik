import { craSelectors } from './core.selectors';
import { craCoreFeatureKey, ICraCoreState } from '../reducers/core.reducer';
import { craFeatureKey, ICraFeatureState } from '../reducers/cra.reducer';
import { craEmployeeFeatureKey } from '../reducers/employee.reducer';
import { craProjectFeatureKey } from '../reducers/project.reducer';

describe('CRA Selectors', () => {
  const mockCraFeatureState: ICraFeatureState = {
    currentYear: 2024,
    currentMonth: 5,
  };

  const mockCraCoreState: ICraCoreState = {
    [craEmployeeFeatureKey]: {
        employees: [],
    },
    [craProjectFeatureKey]: {
        projects: []
    },
    [craFeatureKey]: mockCraFeatureState,
  };

  const mockState = {
    [craCoreFeatureKey]: mockCraCoreState,
  };

  it('should select the current calendar date', () => {
    const result = craSelectors.selectCurrentCalendar(mockState);
    expect(result).toEqual(new Date(2024, 5, 1));
  });

  it('should select the number of days in the current month', () => {
    const result = craSelectors.selectCurrentMonthDays(mockState);
    expect(result).toBe(31);
  });

  it('should select the month columns correctly', () => {
    const result = craSelectors.selectMonthColumns(mockState);
    expect(result.length).toBe(30);
    expect(result[0]).toEqual({
      id: 1,
      date: new Date(2024, 5, 1),
      label: '2024|5|1',
      isWeekday: false,
    });
    expect(result[29]).toEqual({
      id: 30,
      date: new Date(2024, 5, 30),
      label: '2024|5|30',
      isWeekday: false,
    });
  });
});

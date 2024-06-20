import { craFeatureReducer, craFeatureInitialState, ICraFeatureState } from './cra.reducer';
import { craActions } from '../actions/cra.actions';

describe('CRA Feature Reducer', () => {

  it('should decrement month and year when previousMonth action is passed and currentMonth is 0', () => {
    const initialState: ICraFeatureState = {
      currentYear: 2024,
      currentMonth: 0,
    };
    const action = craActions.previousMonth();
    const state = craFeatureReducer(initialState, action);
    expect(state).toEqual({
      currentYear: 2023,
      currentMonth: 11,
    });
  });

  it('should decrement month when previousMonth action is passed and currentMonth is not 0', () => {
    const initialState: ICraFeatureState = {
      currentYear: 2024,
      currentMonth: 5,
    };
    const action = craActions.previousMonth();
    const state = craFeatureReducer(initialState, action);
    expect(state).toEqual({
      currentYear: 2024,
      currentMonth: 4,
    });
  });

  it('should increment month and year when nextMonth action is passed and currentMonth is 11', () => {
    const initialState: ICraFeatureState = {
      currentYear: 2024,
      currentMonth: 11,
    };
    const action = craActions.nextMonth();
    const state = craFeatureReducer(initialState, action);
    expect(state).toEqual({
      currentYear: 2025,
      currentMonth: 0,
    });
  });

  it('should increment month when nextMonth action is passed and currentMonth is not 11', () => {
    const initialState: ICraFeatureState = {
      currentYear: 2024,
      currentMonth: 5,
    };
    const action = craActions.nextMonth();
    const state = craFeatureReducer(initialState, action);
    expect(state).toEqual({
      currentYear: 2024,
      currentMonth: 6,
    });
  });
});

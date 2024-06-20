import { createReducer, on } from '@ngrx/store';
import { produce } from 'immer';
import { craActions } from '../actions/cra.actions';

export const craFeatureKey = 'cra-feature';

export interface ICraFeatureState {
    currentYear: number;
    currentMonth: number;
}

export const craFeatureInitialState: ICraFeatureState = {
    currentYear: 2024,
    currentMonth: 5,
};

export const craFeatureReducer = createReducer(
  craFeatureInitialState,
  on(craActions.previousMonth, produce((state: ICraFeatureState,) => {
    if (state.currentMonth === 0) {
      state.currentMonth = 11;
      state.currentYear -= 1;
    } else {
      state.currentMonth -= 1;
    }
  })),
  on(craActions.nextMonth, produce((state: ICraFeatureState,) => {
    if (state.currentMonth === 11) {
      state.currentMonth = 0;
      state.currentYear += 1;
    } else {
      state.currentMonth += 1;
    }
  })),
);

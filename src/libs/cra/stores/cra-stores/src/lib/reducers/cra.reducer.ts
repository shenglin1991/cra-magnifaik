import { createReducer, on } from '@ngrx/store';
import { produce } from 'immer';

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
);

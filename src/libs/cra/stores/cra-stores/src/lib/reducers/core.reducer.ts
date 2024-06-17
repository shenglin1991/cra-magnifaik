import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { ICraEmployeeState, craEmployeeFeatureKey, craEmployeesReducer } from './employee.reducer';
import { ICraProjectState, craProjectFeatureKey, craProjectsReducer } from './project.reducer';

export const craCoreFeatureKey = 'cra-core';

export interface ICraCoreState {
    [craEmployeeFeatureKey]: ICraEmployeeState;
    [craProjectFeatureKey]: ICraProjectState;
}

export const craCoreReducers: ActionReducerMap<ICraCoreState> = {
    [craEmployeeFeatureKey]: craEmployeesReducer,
    [craProjectFeatureKey]: craProjectsReducer,
};

export const metaReducers: MetaReducer<ICraCoreState>[] = [];

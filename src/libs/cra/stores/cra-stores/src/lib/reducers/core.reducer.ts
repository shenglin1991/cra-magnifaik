import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { ICraEmployeeState, craEmployeeFeatureKey, craEmployeesReducer } from './employee.reducer';
import { ICraProjectState, craProjectFeatureKey, craProjectsReducer } from './project.reducer';
import { craFeatureKey, craFeatureReducer, ICraFeatureState } from './cra.reducer';

export const craCoreFeatureKey = 'cra-core';

export interface ICraCoreState {
    [craEmployeeFeatureKey]: ICraEmployeeState;
    [craProjectFeatureKey]: ICraProjectState;
    [craFeatureKey]: ICraFeatureState;
}

export const craCoreReducers: ActionReducerMap<ICraCoreState> = {
    [craEmployeeFeatureKey]: craEmployeesReducer,
    [craProjectFeatureKey]: craProjectsReducer,
    [craFeatureKey]: craFeatureReducer,
};

export const metaReducers: MetaReducer<ICraCoreState>[] = [];

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICraCoreState, craCoreFeatureKey } from '../reducers/core.reducer';
import { craEmployeeFeatureKey } from '../reducers/employee.reducer';
import { craProjectFeatureKey } from '../reducers/project.reducer';
import { craFeatureKey, ICraFeatureState } from '../reducers/cra.reducer';
import { MonthColumn } from '@cra/models';

export const selectCraState = createFeatureSelector<ICraCoreState>(craCoreFeatureKey);

export const selectEmployeeState = createSelector(selectCraState, (state: ICraCoreState) => state[craEmployeeFeatureKey]);

export const selectProjectState = createSelector(selectCraState, (state: ICraCoreState) => state[craProjectFeatureKey]);

export const selectFeatureState = createSelector(selectCraState, (state: ICraCoreState) => state[craFeatureKey]);

/** Selectors of feature */

const selectCurrentCalendar = createSelector(selectFeatureState, (state: ICraFeatureState): Date => new Date(state.currentYear, state.currentMonth, 1));
const selectCurrentMonthDays = createSelector(selectFeatureState, (state: ICraFeatureState): number => new Date(state.currentYear, state.currentMonth, 0).getDate());
const selectMonthColumns = createSelector(
    selectCurrentCalendar, 
    selectCurrentMonthDays,
    (currentCalendar: Date, currentMonthDays: number): MonthColumn[] => {
        const monthColumns: MonthColumn[] = [];
        for (var i = 1; i < currentMonthDays; i++) {
            const year = currentCalendar.getFullYear();
            const month = currentCalendar.getMonth();
            const date = new Date(year, month, i);
            monthColumns.push({
              id: i,
              date,
              label: `${year}|${month}|${i}`,
              isWeekday: date.getDay() > 0 && date.getDay() < 6,
            });
        }
        return monthColumns;
    }
);
export const craSelectors = {
    selectCurrentCalendar,
    selectCurrentMonthDays,
    selectMonthColumns,
};

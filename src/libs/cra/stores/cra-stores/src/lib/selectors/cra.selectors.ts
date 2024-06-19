import { CraTableVM, Employee, MonthColumn, Project } from '@cra/models';
import { craSelectors } from './core.selectors';
import { createSelector } from '@ngrx/store';
import { selectAllEmployees } from './employee.selectors';
import { selectAllProjects } from './project.selectors';

export const selectCraViewModel = createSelector(
    craSelectors.selectCurrentCalendar,
    craSelectors.selectCurrentMonthDays,
    craSelectors.selectMonthColumns,
    selectAllEmployees,
    selectAllProjects,
    (
        currentCalendar: Date,
        currentMonthDays: number,
        monthColumns: MonthColumn[],
        employees: Employee[],
        projects: Project[],
    ): CraTableVM => {
        return {
            currentCalendar,
            currentMonthDays,
            employees,
            projects,
            monthColumns,
        }
    }
);
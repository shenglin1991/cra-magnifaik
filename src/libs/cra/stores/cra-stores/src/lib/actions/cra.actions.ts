import { createAction } from "@ngrx/store";

const prefix = '[CRA Core]';

const previousMonth = createAction(`${prefix} Set current month to previous one`);

const nextMonth = createAction(`${prefix} Set current month to next one`);

export const craActions = {
    previousMonth,
    nextMonth,
};

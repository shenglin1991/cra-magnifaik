import { Employee } from "../models/employee";
import { Project } from "../models/project";
import { MonthColumn } from "./month-column-view-model";

export interface CraTableVM {
    currentCalendar: Date;
    currentMonthDays: number;
    employees: Employee[];
    projects: Project[];
    monthColumns: MonthColumn[];
}